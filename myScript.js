var b = document.getElementById('welcomebutton');
var a = document.getElementById('welcomeimage')
var counter = 0;
b.onclick = function() {
	if (counter % 2 == 0)
	{
		a.src = "http://cdn.abclocal.go.com/content/creativecontent/images/cms/432731_630x354.jpg";
		counter = counter + 1;
	}
	else
	{
		a.src = "http://www.eatsleepwalk.com/wp-content/uploads/English-Bulldog-Puppy-Training-and-Breed-Information-1.jpg";
		counter = counter + 1;
	}
}