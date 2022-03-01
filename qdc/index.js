$(document).ready(function () {
  var i = 0;
  var data = [
    [
      "01",
      "Feb 2022 2:22:14 PM",
      "114",
      "Triloke Nath Kushwaha",
      "	Delhi",
      "7503848724",
      "04 Feb 2022",
      "3",
      "0",
      "300",
      "0",
      "354",
      "0",
      "354",
    ],
    [
      "02",
      "Feb 2022 2:22:14 PM",
      "114",
      "Triloke Nath Kushwaha",
      "	Delhi",
      "7503848724",
      "04 Feb 2022",
      "3",
      "0",
      "300",
      "0",
      "354",
      "0",
      "354",
    ],
    [
      "03",
      "Feb 2022 2:22:14 PM",
      "114",
      "Triloke Nath Kushwaha",
      "	Delhi",
      "7503848724",
      "04 Feb 2022",
      "3",
      "0",
      "300",
      "0",
      "354",
      "0",
      "354",
    ],
    [
      "04",
      "Feb 2022 2:22:14 PM",
      "114",
      "Triloke Nath Kushwaha",
      "	Delhi",
      "7503848724",
      "04 Feb 2022",
      "3",
      "0",
      "300",
      "0",
      "354",
      "0",
      "354",
    ],
    [
      "05",
      "Feb 2022 2:22:14 PM",
      "114",
      "Triloke Nath Kushwaha",
      "	Delhi",
      "7503848724",
      "04 Feb 2022",
      "3",
      "0",
      "300",
      "0",
      "354",
      "0",
      "354",
    ],
  ];

  $("#toggle").hide();
  $("#filter").click(function () {
    $("#toggle").toggle(0, "linear");
    $(".form_bar").animate({ right: 0 }, 200, "linear");
  });
  $(".cross").click(function () {
    $(".form_bar").animate({ right: "-30%" }, 200, "linear", () => {
      $("#toggle").toggle(0, "linear");
    });
  });

  $("#add").click(() => {
    var html = "<tr id=" + i + ">";
    for (var j = 0; j < 14; j++) {
      html += "<td>" + data[i][j] + "</td>";
    }
    $("#table_body").append(html);
    i++;

    if (i === 5) {
      i = 0;
    }
  });

  $("#customer_name,#user").keyup(function () {
    this.value = this.value.replace(/[^a-z\^A-Z\ ]/g, ""); //Aplahabets only
    //this.value = this.value.replace(/[^0-9\.]/g, ""); //Numbers only
  });
  var names = ["Saikat", "Sabuj", "Asit", "Iti"];
  $("#customer_name,#user").autocomplete({ source: names }, () => {
    console.log("working");
  });
  
});
