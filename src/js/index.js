$(() => {
    $('.btn-return').each((i, obj) => {
        $(obj).click(() => {
            window.history.back();
        });
    });
})