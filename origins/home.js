/// <reference path="../libs/jquery-1.7.1.min.js" />
$(document).ready(function () {

    window.userId = "airbrek";   //用户ID

    //加载右侧内容，即主面板内容
    createRightContent(userId);

    //广告内容
    getAdvertiseContent();

    window.songsArr = getSongsList();  //获得歌曲列表对象
    getSongsList();  //获得歌曲列表对象
    createPlayer(0);  //创建播放器内容，初始为第一首

    var leftShow = false;
    var firstLoad = true;   //第1次加载时，创建左侧内容
    var firstLoad_share = true;  //第1次加载时，创建分享内容
    var origWidth = $(".slideBar").css("width");
    var origDocuemntHeight = $(document).height();
    $(".slide").css("height", origDocuemntHeight + "px");    //根据不同屏幕高，设定左侧高
    $(".slideBar").css("height", origDocuemntHeight + "px");  //根据不同屏幕高，设定滑块高


    /*
    *left部分收缩
    */
    $(".slideBar").click(function () {
        if (leftShow) {
            $(".slideBar").animate({ left: "0px" }, 400);
            $(".slide").animate({ left: "-674px" }, 400, function () {
                leftShow = false;
                $("#slideTarget").attr("title", "展开");
                $("#slideTarget").removeClass("slideClose").addClass("slideOpen");

            });
        }
        else {
            $(".slideBar").animate({ left: "658px" }, 400);
            $(".slide").animate({ left: "0px" }, 400, function () {
                if (firstLoad) {
                    createLeftContent();          //创建左侧内容
                    firstLoad = false;
                }
                leftShow = true;
                $("#slideTarget").attr("title", "关闭");
                $("#slideTarget").removeClass("slideOpen").addClass("slideClose");
            });
        }
    });

    /*分享*/
    $("#share").hover(function () {
        if (firstLoad_share) {
            var str_shareTarget = "<div style='margin-left:10px'>" +
                                                "<a href='javascript:void' title='豆瓣'>" +
                                                    "<img src='./images/shareIcons/shareTodouban.png' alt='img'>" +
                                                "</a>" +
                                                "<a href='javascript:void' title='新浪微博'>" +
                                                    "<img src='./images/shareIcons/shareToxinlan.png' alt='img'>" +
                                                "</a>" +
                                                "<a href='javascript:void' title='QQ'>" +
                                                    "<img src='./images/shareIcons/shareToqq.png' alt='img'>" +
                                                "</a>" +
                                                "<a href='javascript:void' title='腾讯微博'>" +
                                                    "<img src='./images/shareIcons/shareTotengxun.png' alt='img'>" +
                                                "</a>" +
                                                "<a href='javascript:void' title='人人'>" +
                                                    "<img src='./images/shareIcons/shareTorenren.png' alt='img'>" +
                                                "</a>" +
                                                "<a href='javascript:void' title='搜狐微博'>" +
                                                    "<img src='./images/shareIcons/shareTosouhu.png' alt='img'>" +
                                                "</a>" +
                                            "</div>";
            $("#share").append(str_shareTarget);
            firstLoad_share = false;
        }
        $("#share").animate({ "left": "880px" }, "fast", function () { });
    }, function () {
        $("#share").animate({ "left": "1065px" }, "fast", function () { });
    });

    /*广告*/
    function getAdvertiseContent() {
        var arrAdv = [];
        var advObj0 = {
            "id": "adv0",
            "img": "betterMe.png",
            "title": 'be better me'
        };
        var advObj1 = {
            "id": "adv0",
            "img": "app.png",
            "title": "装机高手"
        };
        arrAdv.push(advObj0);
        arrAdv.push(advObj1);
        $("#guanggaoImg").attr("title", arrAdv[1].title + ",点击查看详情");
        $("#guanggaoImg").css("background", "url(./images/guanggao/" + arrAdv[1].img + ")");
    }

    //假设一个音乐列表
    function getSongsList() {
        var songsArr = [];
        var songObj0 = {
            'id': "song0",
            "coverPic": "coverPic_song0.png",
            "songName": "Emrique Igegais",
            "songType": "i Like It 2000",
            "songDetail": "i like it (Original Voice)",
            "songLenght": "03:40"
        };
        songsArr.push(songObj0);
        return songsArr;
    }

    function createPlayer(songIndex) {
        var str_player = "<div id='coverPic' style='background:url(./images/players/" + songsArr[songIndex].coverPic + ");'></div>" +
                                    "<div id='songContent'>" +
                                        "<div id='songName' class='playerDiv'>" + songsArr[songIndex].songName + "</div>" +
                                        "<div id='songType'  class='playerDiv'>" + songsArr[songIndex].songType + "</div>" +
                                        "<div id='songDetail'  class='playerDiv'>" + songsArr[songIndex].songDetail + "</div>" +
                                        "<div id='progressBar'  class='playerDiv' ></div>" +
                                        "<div id='horn' class='playerDiv'>" +
                                            "<span>-0:21&nbsp;</span>" +
                                            "<img title='调节音量' src='./images/players/horn.png' alt='horn'>" +
                                        "</div  >" +
                                        "<div id='songOperation'  class='playerDiv'>" +
                                            "<div id='likeIt' title='添加到喜欢'></div>" +
                                            "<div id='dropIt' title='移除'></div>" +
                                            "<div id='next' title='下一首'></div>" +
                                        "</div>" +
                                    "</div>";
        $(".myPlayer").append(str_player);
        initPlayer();
    }
    function initPlayer() {
//        $("#coverPic").hover(function () {
//            var playerMeng = "<div id='playerMeng'>" +
//                                            "<div id='playerMengViewMore'>" +
//                                                "<a href='javascript:void'>查看专集信息</a>" +
//                                            "</div>" +
//                                        "</div>";
//            $(".myPlayer").append(playerMeng);
//        }, function () {
//            $("#playerMeng").remove();
//        });
    }

});