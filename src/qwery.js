(function (name, context, definition) {
    if (typeof module != 'undefined' && module.exports) {
        module.exports = definition();
    } else {
        if (typeof define == 'function' && define.amd) {
            define(definition);
        } else {
            context[name] = definition();
        };
    };
})('qwery', this, function(){
    var qwery = function (selector, context){
        var _qsa(selector) {
            try {
                return this.querySelectorAll(select);
            } catch(e) {
                return [];
            }
        }
        if (context instanceof NodeList) {
            for( var i=0 ; i <= context.length; i++){
                return context[i].querySelectorAll(selector);
            };
        } else if (typeof(context) === "string") {
            return qwery(selector, qwery(context));
        } else {
            return document.querySelectorAll(selector);
        };
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
