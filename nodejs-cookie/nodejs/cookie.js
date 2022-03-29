const http = require('http');
const cookie = require('cookie'); // npm install cookie

http.createServer(function(req, res){
  // console.log(req.headers.cookie);
  // ? parse 를 이용해 전달받은 cookie 를 객체화하여 사용하기 편리하게 만든다
  // ? parse 는 undefined 를 받지 못하기 때문에 if문을 이용해 예외처리를 해준다
  let cookies = {};
  if(req.headers.cookie !== undefined){
    cookies = cookie.parse(req.headers.cookie);
  }
  // console.log(cookies.yummy_cookie);
  // ? 쿠키 생성 방법
  // ? 복수의 쿠키를 생성할 때는 배열로 작성한다
  res.writeHead(200, {
    'Set-Cookie': [
      'yummy_cookie=choco', 
      'tasty_cookie=strawberry',
      `Permanent=cookies; Max-Age=${60*60*24*30}`
    ]
  })
  // ? Set-Cookie 로 작성된 쿠키는 웹 브라우저가 리로드를 할때마다 Cookie 라고 하는 헤더값을 통해서 서버로 전송한다
  // ? Network > Cookies 를 통해 저장된 cookie를 확인하거나, 
  // ? Appication > 저장용량 > 쿠키 > 로컬주소 에 들어가 저장된 쿠키를 확인 및 삭제할 수 있다
  res.end('Cookie!');
}).listen(3000);

/* session cookies
웹 브라우저가 켜져있을 때만 유효
permanenet cookies
웹 브라우저를 종류한 뒤 다시 실행해도 유효
- 세션쿠키에 Max-Age, Expires 와 같은 설정을 추가하면 퍼머넌트쿠키
*/