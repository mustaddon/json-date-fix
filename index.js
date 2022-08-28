// deserialization fix: change date-string to date-object
const isoDatePattern = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}[.Z:+\-\d]*?$/;
const dotnetDatePattern = /^\/Date\((\d+)([+\-\d]*)\)\/$/;
const jsonParseOrigin = JSON.parse;
const jsonParseFixed = (text, reviver) => jsonParseOrigin(text, (k, v) => {
    if (reviver)
        v = reviver(k, v);

    if (isoDatePattern.test(v))
        return new Date(v);

    let tmp; if (tmp = dotnetDatePattern.exec(v))
        return new Date(tmp.slice(1, 3).reduce((a, x) => a + (parseInt(x) || 0), 0));

    return v;
});

if (JSON.parse != jsonParseFixed)
    JSON.parse = jsonParseFixed;


// serialization fix: preserve timezone information
const ddFormat = (x) => (100 + Math.floor(Math.abs(x))).toString().slice(-2);
const dateToIsoOrigin = Date.prototype.toISOString;
const dateToJsonFixed = function () {
    const offset = this.getTimezoneOffset();
    return [
        dateToIsoOrigin.call(new Date(this.getTime() - offset * 60000)).slice(0, -1),
        offset > 0 ? '-' : '+',
        ddFormat(offset / 60),
        ':',
        ddFormat(offset % 60),
    ].join('');
};

if (Date.prototype.toJSON != dateToJsonFixed && dateToIsoOrigin.call(new Date).slice(-1) == 'Z')
    Date.prototype.toJSON = dateToJsonFixed;