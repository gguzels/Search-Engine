$(function () {
	$("#search-input").keyup(function () {
		if ($("#search-input").val().length >= 3) {
			$("#sonuclar").css("visibility", "visible");
		}
		else {
			$("#sonuclar").css("visibility", "hidden");
		}
		console.log($("#search-input").val().length);
		if ($(this).val().length >= 3) {
			data = "kelime=" + $("#search-input").val();
			$.ajax({
				type: "POST",
				data: data,
				url: "arama",
				success: function (sonuc) {
					$("#sonuclar").html(sonuc);
				},
				error: function () { }
			});
		}
	});

// İnput focus durumunda, gerekli şart sağlanırsa sonuçlar gözükecek.
	$("#search-input").focus(function () {
		if ($("#search-input").val().length >= 3) {
			$("#sonuclar").css("visibility", "visible");
		}
	});

// İmlecin arama sonuçlarımız üzerinde olup olmadığını belirtmek için değişken oluşturuyoruz.
	var $sakla = "true";

	$("#sonuclar").hover(function () {
		$sakla = "false";
	}, function () {
		$sakla = "true";
	});

// Sonuçlardan herhangi bir linke tıklamak istersek, değişkenimiz sayesinde sonuç div'i saklanmayacak.
	$("#search-input").blur(function () {
		if ($sakla == "true") {
			$("#sonuclar").css("visibility", "hidden");
		}
	});



});