(function (global, doc, $) {
    var numberCodes = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57],
        sample;

    sample = {
        build: function () {
            this.initView();
            this.bindAllListeners();
        },
        // 初期化処理
        initView: function () {
            this.links = $(".r");
            this.addLinkNumbers();
        },
        // イベントの紐付け
        bindAllListeners: function () {
            $(doc).on("keydown", $.proxy(this, "onKeydown"));
        },
        // リンクの番号を付与する
        addLinkNumbers: function () {
            this.links.each(function (index, elem) {
                var number = $("<span>");
                number.text(index + ": ");

                $(elem).prepend(number);
            });
        },
        // keydownイベントのハンドラ
        onKeydown: function (evt) {
            var code = evt.keyCode,
                index = numberCodes.indexOf(code);

            if (index === -1) {
                return;
            }

            this.openLink(index);
        },
        // リンクを開く
        openLink: function (num) {
            var target = this.links.eq(num);

            location.href = target.find("a").attr("href");
        }
    };

    sample.build();
}(this, document, jQuery));
