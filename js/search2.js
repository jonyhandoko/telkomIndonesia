$(document).ready(function() {
    
	var storeHostUrl = $("#storeHostUrl").text(); // need <var> hidden element in header div like <var class="hide" id="storeHostUrl">${storeHostUrl}</var>
    var typeAheadPageUrl = $("#typeAheadPageUrl").text();// need <var> hidden element in header div like <var class="hide" id="typeAheadPageUrl">${typeAheadPageUrl}</var>
    var searchPageUrl = $("#searchPageUrl").text();// need <var> hidden element in header div like <var class="hide" id="searchPageUrl">${searchPageUrl}</var>
    
    $('input#header-search-input').jsonSuggest({data: testData.category,url: storeHostUrl + typeAheadPageUrl + '?Ntt=*', maxResults: 20});
    $('input#search-input-big').jsonSuggest({data: testData.category,url: storeHostUrl + typeAheadPageUrl + '?Ntt=*', maxResults: 20});
    
    function myHTMLEnCode(str) // encode special character
    {
        var s = "";
        if (str.length == 0) return "";
        s = str.replace(/&/g, "&amp;");
        s = s.replace(/</g, "&lt;");
        s = s.replace(/>/g, "&gt;");
        //s = s.replace(/ /g,"&nbsp;");
        s = s.replace(/\'/g, "&#39;");
        s = s.replace(/\"/g, "&quot;");
        //s = s.replace(/\n/g, "<br>");
        return s;  
    }
    
	//click search button event
	$("form div[class='form-group box-search'] button").click(function() {
		var ntt = $('input#header-search-input').val();
		ntt = myHTMLEnCode(ntt);
		ntt= encodeURIComponent(ntt);
		var url = storeHostUrl + searchPageUrl + "?Ntt=" + ntt;
		window.location.href = url;
		return false;
	});
	//click search button event
	$("form button[class='btn hidden-xs']").click(function() {
		var ntt = $('input#search-input-big').val();
		ntt = myHTMLEnCode(ntt);
		ntt= encodeURIComponent(ntt);
		var url = storeHostUrl + searchPageUrl + "?Ntt=" + ntt;
		window.location.href = url;
		return false;
	});

	//bind enter keydown event
	$('input#header-search-input').keydown(function(event) {
		if (event.keyCode == 13) {
			var ntt = $('input#header-search-input').val();
			ntt = myHTMLEnCode(ntt);
			ntt= encodeURIComponent(ntt);
			var url = storeHostUrl + searchPageUrl + "?Ntt=" + ntt;
			window.location.href = url;
			return false;
		}
	});

	//bind enter keydown event
	$('input#search-input-big').keydown(function(event) {
		if (event.keyCode == 13) {
			var ntt = $('input#search-input-big').val();
			ntt = myHTMLEnCode(ntt);
			ntt= encodeURIComponent(ntt);
			var url = storeHostUrl + searchPageUrl + "?Ntt=" + ntt;
			window.location.href = url;
			return false;
		}
	});
});