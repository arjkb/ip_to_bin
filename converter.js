function submit_ip()  {
  var ip=document.getElementById("ipaddr").value
  octets = ip.split('.')

  var binary = []

  octets.forEach(function(element) {
    elem = parseInt(element, 10);
    var converted_bin = elem.toString(2).padStart(8, 0)
    console.log(converted_bin)
    // console.log(elem.toString(2).padStart(8, 0))
    binary.push(converted_bin)

  });

  document.getElementById("result").innerHTML=binary.join('.');

}

document.getElementById("ipaddr")
  .addEventListener("keypress", function(event) {
    // trigger button click if the enter key (13) is pressed
    if (event.keyCode == 13)  {
      event.preventDefault();
      document.getElementsByName("submit_button")[0].click();
    }
  }
)
