/**
 * 格式化时间
 * @param  {Object} data []
 *         {Array}  data.date Date对象
 *         {Array}  data.seq  连接符，第一个为年月日，第二个为时分秒
 *         {String}data.type  day-返回年月日，time-返回时分秒，datetime-返回年月日时分秒
 * @return {String}      [格式化后的时间字符串]
 */
Date.prototype.formate = function(data) {
    var date = this,
        seq = data['seq'] ? data.seq : ['-', ':'],
        type = data['type'] ? data.type : 'datetime';

    var Y = date.getFullYear(),
        M = date.getMonth() + 1,
        D = date.getDate(),
        h = date.getHours(),
        m = date.getMonth(),
        s = date.getSeconds();

    var timeStr = '';
    if (type === 'day') {
        var daySeq = seq[0];
        timeStr = Y + daySeq + M + daySeq + D
    }
    if (type === 'time') {
        var timeSeq = seq[1];
        timeStr = h + timeSeq + m + timeSeq + s
    }
    if (type === 'datetime') {
        var daySeq = seq[0],
            timeSeq = seq[1];
        timeStr = Y + daySeq + M + daySeq + D + ' ' + h + timeSeq + m + timeSeq + s;
    }
    return timeStr;
}