function RedPacket1() {
    var arr = document.getElementsByName('selid[]');
    var str = document.getElementsByTagName('strong')[1].innerHTML;
    if (str == '[死亡骑士] firo1603') {
        var k = 1;
    } else {
        var k = 0;
    }
    for (var i = k; i < arr.length; i++) {
        arr[i].checked = true;
    }
    document.getElementsByClassName('btn2')[1].click();
}

function RedPacket2() {
    document.getElementsByName('addpoint')[0].value = 100;
    document.getElementsByName('atc_content')[0].value = "此红包由小红包机器人自动发放";
    document.getElementsByClassName('btn')[0].click();
}

function changeURLPar(destiny, par, par_value) {
    var pattern = par + '=([^&]*)';
    var replaceText = par + '=' + par_value;
    if (destiny.match(pattern)) {
        var tmp = '/\\' + par + '=[^&]*/';
        tmp = destiny.replace(eval(tmp), replaceText);
        return (tmp);
    } else {
        if (destiny.match('[\?]')) {
            return destiny + '&' + replaceText;
        } else {
            return destiny + '?' + replaceText;
        }
    }
    return destiny + '\n' + par + '\n' + par_value;
}

function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}

var destiny = document.location.href;
var fir = document.getElementsByTagName('strong')[0].innerHTML;

if (fir == '论坛操作') {
    RedPacket2();
} else {
    var tip1 = document.getElementsByClassName('s3 tal')[0];
    if (tip1 !== undefined) {
        tip2 = document.getElementsByClassName('s3 tal')[0].innerHTML;
        if (tip2 == '本帖最近评分记录：') {
            var pag = GetQueryString("page");
            pag = parseInt(pag) + 1;
            var url1 = changeURLPar(destiny, "page", pag);
            window.location.href = url1;
        }
    } else {
        RedPacket1();
    }
}
