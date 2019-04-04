$(function () {
    var id=$("#header")
    var bg=$("div[data-bgid]")
    $(bg).on("mouseover","div",function () {
        $(this).addClass('bgimg')
        $(this).children("ul:last-child").removeClass('d-none')
        // removeClass()
    })
    $(bg).on("mouseout","div",function () {
        $(this).removeClass('bgimg')
    })
    $(bg).on("mouseout","div",function () {
        $(this).children("ul:last-child").addClass('d-none')
    })
})