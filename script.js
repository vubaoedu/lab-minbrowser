// Lấy các button group
let result = document.getElementById("result");
let btnGroups = document.getElementsByClassName("btn-group");
let btnWindows = btnGroups[0].children;
let btnScreens = btnGroups[1].children;
let btnLocations = btnGroups[2].children;
let btnHistories = btnGroups[3].children;
let btnNavigators = btnGroups[4].children;
let btnTimings = btnGroups[5].children;

// Thử nghiệm các hàm xử lý window
// ========================================================================

// width x height
btnWindows[0].addEventListener("click", function () {
  let str =
    "w x h của window = " + window.innerWidth + " x " + window.innerHeight;
  result.innerHTML = str;
});

let myWindow;

// open
btnWindows[1].addEventListener("click", function () {
  let width = window.prompt("Nhập chiều ngang của cửa sổ.");
  let height = window.prompt("Nhập chiều cao của cửa sổ.");
  myWindow = window.open(
    "",
    "New Window",
    "width=" + width + ",height=" + height
  );
  myWindow.document.write("Kmin Academy");
});

// close
btnWindows[2].addEventListener("click", function () {
  let confirm = window.confirm("Bạn muốn tắt cửa sổ này phải không?");
  if (confirm == true) myWindow.close();
});

// move to
btnWindows[3].addEventListener("click", function () {
  let x = parseInt(window.prompt("Nhập x."));
  let y = parseInt(window.prompt("Nhập y."));
  myWindow.moveTo(x, y);
  myWindow.focus();
});

// resize to
btnWindows[4].addEventListener("click", function () {
  let w = parseInt(window.prompt("Nhập x."));
  let h = parseInt(window.prompt("Nhập y."));
  myWindow.resizeTo(x, y);
  myWindow.focus();
});

// Thử nghiệm các hàm xử lý screen
// ========================================================================

{
  /* <button type="button">width x height</button>
<button type="button">availWidth x availHeight</button>
<button type="button">colorDepth</button> */
}

// width x height
btnScreens[0].addEventListener("click", function () {
  let str = "w x h (screen) = " + screen.width + " x " + screen.height;
  result.innerHTML = str;
});

// availWidth x availHeight
btnScreens[1].addEventListener("click", function () {
  let str =
    "availWidth x availHeight (screen) = " +
    screen.availWidth +
    " x " +
    screen.availHeight;
  result.innerHTML = str;
});

// colorDepth
btnScreens[2].addEventListener("click", function () {
  let str = "Color depth = " + screen.colorDepth;
  result.innerHTML = str;
});

// Thử nghiệm các hàm xử lý location
// ========================================================================

{
  /* <button type="button">href</button>
<button type="button">hostname</button>
<button type="button">pathname</button>
<button type="button">protocal</button>
<button type="button">port</button> */
}

// href
btnLocations[0].addEventListener("click", function () {
  let str = "href = " + location.href;
  result.innerHTML = str;
});

// hostname
btnLocations[1].addEventListener("click", function () {
  let str = "hostname = " + location.hostname;
  result.innerHTML = str;
});

// pathname
btnLocations[2].addEventListener("click", function () {
  let str = "pathname = " + location.pathname;
  result.innerHTML = str;
});

// protocal
btnLocations[3].addEventListener("click", function () {
  let str = "protocal = " + location.protocol;
  result.innerHTML = str;
});

// port
btnLocations[4].addEventListener("click", function () {
  let str = "port = " + location.port;
  result.innerHTML = str;
});

// Thử nghiệm các hàm xử lý history
// ========================================================================

{
  /* <button type="button">back</button>
<button type="button">forward</button> */
}

// back
btnHistories[0].addEventListener("click", function () {
  history.back();
});

// forward
btnHistories[1].addEventListener("click", function () {
  history.forward();
});

// Thử nghiệm các hàm xử lý navigator
// ========================================================================

// language
btnNavigators[0].addEventListener("click", function () {
  let str = "language = " + navigator.language;
  result.innerHTML = str;
});

// onLine
btnNavigators[1].addEventListener("click", function () {
  let str = "onLine = " + navigator.onLine;
  result.innerHTML = str;
});

// cookieEnabled
btnNavigators[2].addEventListener("click", function () {
  let str = "cookieEnabled = " + navigator.cookieEnabled;
  result.innerHTML = str;
});

// Thử nghiệm các hàm xử lý Timing
// ========================================================================

let timeoutId;
btnTimings[0].addEventListener("click", function () {
  let second = parseInt(prompt("Nhập vào số giây chờ:"));
  timeoutId = setTimeout(function () {
    result.innerHTML = "Đã hết thời gian chờ.";
  }, second * 1000);
});
btnTimings[1].addEventListener("click", function () {
  if (timeoutId) clearTimeout(timeoutId);
});

let intervalId;
btnTimings[2].addEventListener("click", function () {
  intervalId = setInterval(function () {
    const d = new Date();
    result.innerHTML = d.toLocaleTimeString();
  }, 1000);
});
btnTimings[3].addEventListener("click", function () {
  if (intervalId) clearTimeout(intervalId);
});
