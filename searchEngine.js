$(function () {
	$("#search-input").keyup(function () {
		if ($("#search-input").val().length >= 2) {
			$("#sonuclar").css("visibility", "visible");
		}
		console.log($("#search-input").val().length);
		if ($(this).val().length >= 2) {
			data = "kelime=" + $("#search-input").val();
			$.ajax({
				type: "POST",
				data: data,
				url: "arama.php",
				success: function (sonuc) {
					$("#sonuclar").html(sonuc);
				},
				error: function (hata) {
					$("#sonuclar").html(hata);
				}
			});
		}
	});

	$("#search-input").focus(function () {
		if ($("#search-input").val().length >= 2) {
			$("#sonuclar").css("visibility", "visible");
		}
	});

	$("#search-input").blur(function () {
		$("#sonuclar").css("visibility", "hidden");
	});
});