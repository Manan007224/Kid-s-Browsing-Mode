temp = location.href;
target="_blank"

var HttpClient = function() {
    this.get = function(aUrl, aCallback) {
        var anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = function() {
            if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                aCallback(anHttpRequest.responseText);
        }

        anHttpRequest.open( "GET", aUrl, true );
        anHttpRequest.send( null );
    }
}

var x = new HttpClient();

//document.getElementsByTagName("body")[0].style.WebkitFilter = 'blur(4px)';
//document.getElementsByTagName("body")[0].style.filter= 'blur(4px)';

x.get('http://127.0.0.1:3000/?url='+temp, function(response) {

    // Kunal's code 

    var json = JSON.parse(response);

    // Keywords objects
    var keywords = json['keywords'];

    //Filtering for negative sentiments
    var sentiments = [];
    var changewords = [];
    var j = 0;
    var i = 0;

    for(  i = 0; i< keywords.length; i++)
    {
        if (keywords[i].sentiment.score < 0) 
        {
            sentiments[j] = keywords[i];
            changewords[j] = keywords[i].text;
            j = j + 1;
        }
    }

    var one = changewords.join(" ");
    one = one.replace(/\s+/g,' ').trim();
    one = one.replace(/[\[\]&]+/g, '');
    one = one.replace(/\//g, '');
    one = one.replace(/\./g, "");
    one = one.replace("tel:\\\\","");
    one = one.replace (/,/g, "");

    //Lower case
    var lower = one.toLowerCase();
    //split
    lower = lower.split(' ');

    lower = removeDuplicates(lower);

    // var wordresult;

    // temp = 'motherfucker'
    // x.get('https://wordsapiv1.p.mashape.com/words/'+temp+'/typeOf', function(recieve) 
    // {

    //     wordresult = JSON.parse(recieve);

    // });
    console.log(lower);

    //Relaing the Hatewords
    
    var search;
    var replacement = "********";

    document.body.innerHTML = document.body.innerHTML.toLowerCase();




        // Louis code
        var data = JSON.parse(response);
		console.log(JSON.parse(response));
        if (data.sentiment.document.label === "negative") {
          var option = window.confirm("This site has negative content, press OK to proceed or Cancel to go back.");
          if (option === true) {
             // document.body.innerHTML = document.body.innerHTML.split(search).join(replacement);

                for (var i = 0; i < lower.length; i++) 
                {
                    search = lower[i];

                    document.body.innerHTML = document.body.innerHTML.split(search).join(replacement);

                }

           // document.getElementsByTagName("body")[0].style.WebkitFilter = 'none';
           // document.getElementsByTagName("body")[0].style.filter= 'none';
          } else {
            window.history.back();
          }
        } else {
          // document.getElementsByTagName("body")[-1].style.WebkitFilter = 'none';
          // document.getElementsByTagName("body")[0].style.filter= 'none';
        }

	// }
});


function removeDuplicates(num) {
  var x,
      len=num.length,
      out=[],
      obj={};
 
  for (x=0; x<len; x++) {
    obj[num[x]]=0;
  }
  for (x in obj) {
    out.push(x);
  }
  return out;
}

