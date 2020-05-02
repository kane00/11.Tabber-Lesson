// 初期設定で表示されるのはTAB1のコンテンツだけにして、それ以外の内容は非表示に
// .hide();は、特定のHTML要素を非表示にするメソッド
// id="tab-contents"の要素のうち、 class="tab"であり、id="tab1"ではない要素が非表示
$('#tab-contents .tab[id != "tab1"]').hide();
// id="tab-menu"の<a>タグがクリックされたときに、処理を実行してください
$('#tab-menu a').on('click', function(){
	// id="tab-contents"内のいずれかのタブがクリックされたときに、
	// そのタブ内の全コンテンツをいったん非表示
	$("#tab-contents .tab").hide();
	// .removeClass()は、クラス属性が設定されているHTML要素から、クラスを削除するメソッド
	// activeが削除対象のクラスとして指定
	$("#tab-menu .active").removeClass("active");
	// .addClass()は、任意のHTML要素にクラス属性を追加できるメソッド
	// $(this)のとき、つまり、タブがクリックされたときactiveクラスが追加
	$(this).addClass("active");
	// .attr()は、HTML要素の属性を取得したり設定できるメソッド
	// .show()は要素を表示するメソッドなので、取得したhref属性の中身が表示される
	// $(this)のとき、つまり、タブがクリックされたとき表示される
	$($(this).attr("href")).show();
	return false;
});