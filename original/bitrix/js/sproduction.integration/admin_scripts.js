
function isInIframe() {
    try {
        return window.self !== window.top;
    } catch (e) {
        return true;
    }
}

if (isInIframe()) {
    var url = window.location.href;
    if (url.search('IFRAME') == -1) {
        var new_url = new URL(url);
        new_url.searchParams.set('IFRAME', 'Y');
        document.location.href = new_url.toString();
    }
    //$('#sale_order_edit_form').append($('<input type="hidden" name="IFRAME" value="Y" />'));
}

$(function() {

    if (isInIframe()) {
        $('#tab_order_edit_table .adm-s-gray-title-btn-container').hide();
    }

});
