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
        var i;

        if (context instanceof NodeList) {
            // Necesito hacer un map y collect sobre el Array
            var tmp_elem = document.createDocumentFragment()
            for(i=0 ; i <= context.length; i++){
                tmp_elem.appendChild(context[i]);
                return qwery._qSA(selector, tmp_elem);
            };
        } else if (typeof(context) === "string") {
            return qwery(selector, qwery(context));
        } else {
            return qwery._qSA(selector, document);
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

    // private helpers
    qwery._qSA = function (selector, elem) {
        try {
            return elem.querySelectorAll(selector);
        } catch(e) {
            return [];
        };
    };
    
    return qwery;
});
