// script src="https://www.gstatic.com/firebasejs/4.3.1/firebase.js"

// Array of bad words

var  json= {
  "badwords": ["abbo","fuck","""ABC","ABCD","abo","af","African catfish","Africoon","Afro-Saxon","albino","alligator bait","Americoon","Amo","anchor baby","Angie","Anglo","Ann","ape","apple","Argie","Armo","Aunt Jane","Aunt Jemima","Aunt Mary","Aunt Sally","azn","bamboo coon","banana","banana bender","banana lander","banjo lips","bans and cans","beach nigger","bean dipper","beaner","beaner shnitzel","beaney","Bengali","bhrempti","bint","bird","bitch","bitter clinger","bix nood","black Barbie","black dago","blaxican","blockhead","bludger","bluegum","bog hopper","Bog Irish","bog jumper","bog trotter","bogan","bong","boo","boojie","book book","boon","booner","boong","boonga","boonie","border bunny","border hopper","border jumper","border nigger","Bounty bar","boxhead","brass ankle","brownie","bubble","buck","buckethead","buckra","Buckwheat","Buddhahead","buffie","bug eater","buk buk","bumblebee","bung","bunga","burrhead","butterhead","cab nigger","camel cowboy","camel fucker","camel humper","camel jacker","camel jockey","can eater","carpet pilot","carrot snapper","Caublasian","cave nigger","celestial","Charlie","charva","charver","closet fag","closetfag","dyke","fag","faggot","Fairy","finocchio","frocio","fruit","queen","queer","tranny","African catfish","Amo","Bengali","camel fucker","carrot snapper","Christ killer","clam","clamhead","dogan","dogun","four by two","Gerudo","gew","hebe","hebro","heeb","higger","Hun","hymie","Jihadi","khazar","mackerel snapper ","muzzie","Orangie","oven dodger","papist","prod","proddy dog","proddywhoddy","proddywoddy","Russellite ","snout","soup taker ","spike","WASP","WIC","Zionazi"]
}


// COnverting to Json
// var jsonString = JSON.stringify(badwords);


// var length = badwords.length;

// var words = [];

// for (var i = 0; i < length; i++) 
// {	
// 	words[i] = '{word:' + badwords[i]+'}';
//  }


// words = '[' + words +']'

// temp = JSON.stringify(words);

// // COnverting string to json object
// var json = JSON.parse(temp);


var toSearch = "African catfish";

console.log(json['badwords'][112]);

for(var i=0; i < json['badwords'].length; i++) 
{
	if (json['badwords'][i] == toSearch) 
	{
		results = i;
	}
}



console.log(results);