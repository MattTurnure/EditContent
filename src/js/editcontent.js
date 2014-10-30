if (typeof addEventListener === 'function' && typeof document.body.contentEditable === 'string') {
    (function () {
        'use strict';
        var doc, body, mkControls, mkStyles, btn, toggleContentEditable, editOn, editOff;

        doc  = document;
        body = doc.body;

        mkControls = function () {
            var control_container = doc.createElement('div'), btn_txt;

            btn = doc.createElement('span');
            btn_txt = doc.createTextNode('Edit Page');

            control_container.className = 'control-container';
            btn.className = 'edit-content-btn';
            btn.setAttribute('data-is-editable', 'false');

            control_container.appendChild(btn);
            btn.appendChild(btn_txt);
            body.appendChild(control_container);

            btn.addEventListener('click', function () {
                toggleContentEditable();
            }, false);
        };

        mkStyles = function () {
            var style = document.createElement('style'), styles;

            styles  = '.edit-content-btn {background: #f2f2f2; color: #666; border: 1px solid #666; border-bottom: 0; border-right: 0; display: inline-block; font-size: 18px; padding: 6px 12px; cursor: pointer; position: fixed; bottom: 0; right: 0; z-index: 1000;}';
            styles += '.control-container {display: block; height: 34px; width: 100%; position: relative;}';
            style.innerHTML = styles;

            doc.head.appendChild(style);
        };

        toggleContentEditable = function () {
            if (btn.getAttribute('data-is-editable') === 'false') {
                editOn();
            } else {
                editOff();
            }
        };

        editOn = function () {
            btn.setAttribute('data-is-editable', 'true');
            btn.innerHTML = 'Stop Editing';
            body.contentEditable = true;
        };

        editOff = function () {
            btn.setAttribute('data-is-editable', 'false');
            btn.innerHTML = 'Edit Page';
            body.contentEditable = false;
        };

        mkStyles();
        mkControls();
    }());
}