/**
 * Injects jsCoq into an existing page.
 * This script has to be at the end of the body so that it runs after
 * the page DOM has loaded.
 */

function jsCoqInject() {
    $(document.body).addClass('hands-off')
        .append($('<div id="ide-wrapper">')
            .addClass('toggled').append($('#page')))
        .append($('<link href="common/css/jscoq.css" rel="stylesheet" type="text/css"/>'))
        .append($('<div id="jscoq-plug">')
            .click(jsCoqStart));
}

var jsCoqShow = (localStorage.jsCoqShow === 'true');

var jscoq_ids  = ['#main > div.code'];
var jscoq_opts = {
    init_import: ['utf8'],
    show:      jsCoqShow,
    focus:     false,
    replace:   true,
    base_path: '../../node_modules/jscoq/',
    editor:    { mode: { 'company-coq': true }, keyMap: 'default', className: 'jscoq code-tight' },
    init_pkgs: ['init'],
    all_pkgs:  ['init',
                'coq-base', 'coq-collections', 'coq-arith', 'coq-reals',
                'lf', 'plf']
};

function jsCoqLoad() {
    // - remove empty code fragments (coqdoc generates some spurious ones)
    $('#main > div.code').each(function() {
        if ($(this).text().match(/^\s$/)) $(this).remove();
    });

    JsCoq.start(jscoq_opts.base_path, '../../node_modules', jscoq_ids, jscoq_opts)
        .then(coq => {
            window.coq = coq;
            window.addEventListener('beforeunload', () => { localStorage.jsCoqShow = coq.layout.isVisible(); });
            document.querySelector('#page').focus();
        });
    
    if (jscoq_opts.show)
        $(document.body).addClass('jscoq-launched');
}

function jsCoqStart() {
    $(document.body).addClass('jscoq-launched');
    coq.layout.show();
}

if (location.search === '') {
    jsCoqInject();
    jsCoqLoad();
}
