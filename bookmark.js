// ブックマークボタン押す関数
const clickBookmarkButton = () => {
    document.getElementsByClassName('css-901oao r-1awozwy r-1re7ezh r-6koalj r-1qd0xha r-a023e6 r-16dba41 r-1h0z5md r-ad9z0x r-bcqeeo r-o7ynqc r-clp7b1 r-3s2u2q r-qvutc0')[4].click();
    setTimeout(() => {
        document.getElementsByClassName('css-1dbjc4n r-1loqt21 r-18u37iz r-1j3t67a r-9qu9m4 r-o7ynqc r-1j63xyz r-13qz1uu')[1].click();
    }, 100);
};

// ブックマークボタン追加
const html = `<div id="onclick_bookmark" class="css-1dbjc4n r-18u37iz r-1h0z5md r-3qxfft r-h4g966 r-rjfia"><div aria-haspopup="true" aria-label="ブックマークに追加" role="button" data-focusable="true" tabindex="0" class="css-18t94o4 css-1dbjc4n r-1777fci r-11cpok1 r-1ny4l3l r-bztko3 r-lrvibr"><div dir="ltr" class="css-901oao r-1awozwy r-1re7ezh r-6koalj r-1qd0xha r-1b43r93 r-16dba41 r-1h0z5md r-ad9z0x r-bcqeeo r-o7ynqc r-clp7b1 r-3s2u2q r-qvutc0"><div class="css-1dbjc4n r-xoduu5"><div class="css-1dbjc4n r-sdzlij r-1p0dtai r-xoduu5 r-1d2f490 r-xf4iuw r-u8s1d r-zchlnj r-ipm5af r-o7ynqc r-6416eg"></div>
    <p><svg viewBox="0 0 24 24" class="r-4qtqp9 r-yyyyoo r-50lct3 r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1srniue">
<path d="M23.074 3.35H20.65V.927c0-.414-.337-.75-.75-.75s-.75.336-.75.75V3.35h-2.426c-.414 0-.75.337-.75.75s.336.75.75.75h2.425v2.426c0 .414.335.75.75.75s.75-.336.75-.75V4.85h2.424c.414 0 .75-.335.75-.75s-.336-.75-.75-.75zM19.9 10.744c-.415 0-.75.336-.75.75v9.782l-6.71-4.883c-.13-.095-.285-.143-.44-.143s-.31.048-.44.144l-6.71 4.883V5.6c0-.412.337-.75.75-.75h6.902c.414 0 .75-.335.75-.75s-.336-.75-.75-.75h-6.9c-1.242 0-2.25 1.01-2.25 2.25v17.15c0 .282.157.54.41.668.25.13.553.104.78-.062L12 17.928l7.458 5.43c.13.094.286.143.44.143.117 0 .234-.026.34-.08.252-.13.41-.387.41-.67V11.495c0-.414-.335-.75-.75-.75z"></path>
</svg></p>
</div></div></div></div>`

// ふぁぼとかRTとかが並んでる欄に追加
// なんか遅れて描画されるので遅延させる
setInterval(() => {
    const tweetActionBar = document.getElementsByClassName('css-1dbjc4n r-1oszu61 r-1gkumvb r-1efd50x r-5kkj8d r-18u37iz r-ahm1il r-a2tzq0')[0];
    if (document.getElementsByClassName('css-1dbjc4n r-1oszu61 r-1gkumvb r-1efd50x r-5kkj8d r-18u37iz r-ahm1il r-a2tzq0').length != 0) {
        // 追加済みならいらない
        if (document.getElementById('onclick_bookmark') == null) {
            tweetActionBar.insertAdjacentHTML('beforeend', html);
            // 押したら追加
            document.getElementById('onclick_bookmark').onclick = () => {
                clickBookmarkButton();
            };
        }
    }
}, 1000)