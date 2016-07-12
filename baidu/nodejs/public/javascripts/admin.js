var selectedItem;
var dataID = 1;
var newsTitle = "";
var newImg = "";
var newsContent = "";
var addTime = "";

$(function() {

    //查询数据并显示出来
    $('.data-list').click(function() {
        selectedItem = $(this).attr('value');
        getMsg();
    });

    //添加新闻内容
    $("#addNews").click(function() {
            var addNewsTitle = $("#newsTitle").val();
            var addNewsDesrip = $("#descrip").val();
            var addNewsContent_url = $("#content_url").val();
            var addNewsPic_url = $("#pic_url").val();
            if (!addNewsTitle) {
                alert('标题不能为空！');
                return
            };
            if (!addNewsDesrip) {
                alert('简要不能为空！');
                return
            };
            if (!addNewsContent_url) {
                alert('内容链接不能为空！');
                return
            };
            if (!addNewsPic_url) {
                alert('图片链接不能为空！');
                return
            };
            $.ajax({
                url: '/insert',
                dataType: 'json',
                type: 'post',
                data: {
                    "title": addNewsTitle,
                    "descrip": addNewsDesrip,
                    "content_url": addNewsContent_url,
                    "pic_url": addNewsPic_url,
                    "classfy": selectedItem
                },
                success: function() {
                    // $("#addInfo").text(data['result']);
                    alert("新闻添加成功")
                    $(".add").slideUp(1000);
                    getMsg();
                }
            })
        })

        // 添加按钮的显示与隐藏
    $("#bttn").click(function() {
        $(".add").show();
    });
    $('#cancel').click(function() {
        $(".add").hide();
    })

    //修改更新新闻内容
    $("#mdfUpDate").click(function() {
        var mdfTitle=$("#mdfTitle").val();
        var mdfDescrip= $("#mdfDescrip").val();
        var mdfCon=$("#mdfCon").val();
        var mdfImg=$("#mdfImg").val();
        if (!mdfTitle) {
            alert("标题不能为空！");
            return
        };
         if (!mdfDescrip) {
            alert("简要不能为空！");
            return
        };
         if (!mdfCon) {
            alert("内容链接不能为空！");
            return
        };
         if (!mdfImg) {
            alert("图片链接不能为空！");
            return
        };
            $.ajax({
                url: '/update',
                dataType: 'json',
                type: 'post',
                data: {
                    "classfy": $("#mdfClassfy").val(),
                    "id": $("#mdfId").val(),
                    "title": $("#mdfTitle").val(),
                    "descrip": $("#mdfDescrip").val(),
                    "content_url": $("#mdfCon").val(),
                    "pic_url": $("#mdfImg").val()
                },
                success: function(data) {
                    // $("#mdfInfo").text(data['result']);
                    alert('信息修改成功')
                    $(".updateNews").slideUp(1000);
                    getMsg();
                }
            })
        })
        //点击取消按钮
    $("#mdfHide").click(function() {
        $(".updateNews").slideUp(1000);
    });

    //删除新闻数据

    $("#deleteBtn").click(function() {
        $.ajax({
            url: '/delete',
            type: 'post',
            dataType: "json",
            data: {
                "id": dataID
            },
            success: function(data) {
                // $("#info").text("信息删除成功");
                alert("信息删除成功！")
                $(".delete-affirm").hide();
                getMsg();
            }
        });
    });

    $("#cancelBtn").click(function() {
        $(".delete-affirm").hide();
    });

    //显示数据的函数
    function getMsg() {
        dataID = "";
        $("#data").empty();
        $.ajax({
            url: '/select',
            dataType: 'json',
            type: 'post',
            data: {
                "classfy": selectedItem,
                "dataID": ''
            },
            success: function(data) {
                console.log(data);
                for (var i = 0; i < data.length; i++) {
                    var tr = $("<tr></tr>")
                    var newsId = $("<td class='col-md-1 td-1'></td>").text(data[i]['id']);
                    var newsTitle = $("<td class='col-md-3'></td>").text(data[i]['title']);
                    var newsDescrip = $("<td class='col-md-3'></td>").text(data[i]['descrip']);
                    var addTime = $("<td class='col-md-2'></td>").text(moment(data[i]['time']).format('YYYY-MM-DD HH:mm:ss'));

                    // var newsImg = $("<td></td>").text(data[i]['pic_url']);
                    // var newsContent = $("<td></td>").text(data[i]['content_url']);
                    var addBtn = $("<button class='btn btn-warning' onclick='showModify(this.value)'> 修改 </button>");

                    addBtn.val(data[i]['id']); //obj参数为当前value值（id）

                    var dleBtn = $("<button class='btn btn-danger'  onclick ='removeClick(this.value)'> 删除 </button>");
                    dleBtn.val(data[i]['id']);

                    // var moreButton = $("<td class='col-md-2'></td>");

                    tr.append(newsId);
                    tr.append(newsTitle);
                    tr.append(newsDescrip);
                    tr.append(addTime);
                    // tr.append(moreButton);
                    tr.append(addBtn);
                    tr.append(dleBtn);
                    $("#data").append(tr);
                }
            }
        })
    }

})
// 显示修改页面进行修改
    function showModify(obj) {
        $(".updateNews").slideDown(1000);
        dataID = obj;
        $.ajax({
            url: '/select',
            type: 'post',
            dataType: "json",
            data: {
                "classfy": selectedItem,
                "id": dataID
            },
            success: function(data) {
                $("#mdfId").val(data[0]['id']);
                $("#mdfClassfy").val(data[0]['classfy']);
                $("#mdfTitle").val(data[0]['title']);
                $("#mdfImg").val(data[0]['pic_url']);
                $("#mdfTime").val(moment(data[0]['time']).format('YYYY-MM-DD HH:mm:ss'));
                $("#mdfCon").val(data[0]['content_url']);
                $("#mdfDescrip").val(data[0]['descrip']);
            }
        });
    }

    // 显示删除界面
    function removeClick(str) {
        dataID = str;
        $(".delete-affirm").show();
        $("#info").text("确定要删除吗？");
    }