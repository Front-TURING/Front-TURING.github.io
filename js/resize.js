/*窗后大小改变时始终保持页面大小和窗口一致*/

define(function() {
    var container = document.getElementById("container");
    var resize = function() {
        container.style.height = window.innerHeight + 'px';
        container.style.width = window.innerWidth + 'px';
    };

    return resize;
});