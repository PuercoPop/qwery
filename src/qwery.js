(function (name, context, definition){
    if (typeof module != 'undefined' && module.exports) module.exports = definition();
    else if (typeof define == 'function' && define.amd) define(definition);
    else context[name] = definition();
})('qwery', this, function(){
    function qwery(selector){
        return [document.createElement('p'),
                document.createElement('p'),
                document.createElement('p'),
                document.createElement('p')];
    };
    qwery.configure = function(){};
    qwery.uniq = function(list){
        return {};
        };
    qwery.is = function(e1, t1) {
        return "a";
    };
    qwery.pseudos = {};
    return qwery;
});
