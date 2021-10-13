### Nhắc lại về middleware
- Middleware là thành phần nằm ở giữa
- Cụ thể : Trong redux middleware nằm giữa Reducers và Dispatch Action

### Hiểu về khái niệm side-effect (hiệu ứng phụ)
- Trong 1 hàm, ngoài tác dụng chính của hàm, thì nó còn thực hiện một số tác dụng phụ
- Trong react : Các thao tác xử lý cần nhiều thời gian để phản hồi
- Ví dụ
    - Thao tác bất đồng bộ : lấy dữ liệu từ API
    - Thao tác đọc ghi file
    - Thao tác đọc ghi cookies từ browser...

- Các side-effect khi xử lý bằng redux-thunk trở nên khó khăn => Sử dụng redux-saga

### Tìm hiểu về Generator function của ES6
- Generator là 1 function trong javascript có khả năng pause excution (dừng việc thực thi function) và resume execution (tiếp tục thực thi function) khi 1 điều kiện được kích hoạt (gọi hàm next())

Ví dụ
```
function* generatorFunc() {
    yield 0
    console.log('something')
    yield 1
}

const generator = generatorFunc()
console.log(generator.next())  // { value: 0, done: false }
console.log(generator.next())  
// something 
// { value: 1, done: false }
console.log(generator.next())  // { value: undefined, done: true }
```

- Mỗi khi call hàm next, mỗi dòng code trong generator function sẽ được thực thi cho đến khi gặp từ khoá `yield` thì dừng lại và return về 1 object ứng với giá trị của value property của yield trong function

- Có thể hình dung: yield giống như từ khoá return trong hàm thông thường, tuy nhiên nó sẽ chạy tiếp các dòng code tiếp theo và dừng khi gặp từ khoá yield kế tiếp.

### redux-saga là gì ?
- Redux Saga là 1 thư viện redux middleware giúp chúng ta quản lý các side-effect trong redux một cách hiệu quả
- Redux-Saga sử dụng Generators (function*) của ES6 để xử lý “bất đồng bộ” một cách “đồng bộ”.
- Ví dụ cơ bản:
  - Redux thunk
    + Khi login ta phải dispatch 1 action LOGIN_REQUEST
    + Sau khi dữ liệu được trả về từ API, ta tiếp tục định nghĩa tiếp 2 action: LOGIN_SUCCESS và LOGIN_ERROR
    => Chúng ta phải viết khá nhiều action và khó kiểm soát được các action sinh ra.
    + Luồng chạy của thunk như sau: dispatch 1 action -> reducer bắt được action -> lưu state vào store.
  - Redux saga
    + Đối với hành động login từ user, chúng ta chỉ cần tạo 1 saga tương ứng : `1 action <-> 1 saga`
    + Luồng chạy của saga như sau: Dispatch 1 action -> Reducer bắt được action -> saga bắt được action -> saga sẽ dispatch các action liên quan -> reducer bắt được các action liên quan đó -> Lưu state vào store
