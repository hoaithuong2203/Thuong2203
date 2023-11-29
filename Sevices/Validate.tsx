export const ValidateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (regex.test(email)) {
      return true;
    } else {
      alert("Email không hợp lệ");
      return false;
    }
  };
  
  export const ValidatePassword = (password: string) => {
    if (password.charAt(0) !== password.charAt(0).toLocaleUpperCase()) {
      alert("Chữ cái đầu phải viết hoa.");
      return false;
    }
    if (password.trim().length < 8) {
      alert("Mật khẩu phải lớn hơn 8 kí tự.");
      return false;
    }
    return true;
  };
  
  export const Confirmpassword = (password: string, repassword: string) => {
    if (password.toLowerCase() !== repassword.toLowerCase()) {
      alert("Mật khẩu không khớp");
      return false;
    }
  
    return true;
  };
  