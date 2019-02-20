var story1 = 'Every Christmas we {{verb}} to a {{adjective}} tree farm far away. This is not just any {{adjective}} tree farm. My dad and I {{verb}} onto the {{noun}} to {{verb}} for the perfect {{noun}}. Some people like them {{adjective}}, but I prefer them {{adjective}}. After  searching for hours I usually {{adverb}} exclaim "Dad! The perfect tree is over there!" Off we {{verb}} to get the tree. The problem is we always forget the {{noun}} and the {{noun}}. But at the end of the day we {{adverb}} get the tree and head home {{adverb}}. "I wish it was Christmas all year round"  I {{adverb}} think to myself.'

var story2 = 'Today I went shopping. When I arrived at the store I saw a {{adjective}} {{noun}}, who upon noticing me {{adverb}} said "I need to {{verb}}". "Well, that was {{adjective}}" I thought to myself and walked in the store. The store had rearranged its inventory, so I felt {{adverb}} lost. I walked up to store clerk and said {{adverb}} "I am looking for a {{adjective}} {{noun}} that doesn’t {{verb}} as often as the last one I had." The store clerk looked at me with a {{adjective}} look in his eye and said, "What you are looking for can be found by the {{noun}}, if you see a {{noun}} that {{adverb}} can {{verb}}, then you\'ve gone too far." As I tried to understand his directions, I thought to myself, "I should have just ordered it on amazon.com, Their products seem to {{verb}} the perfect amount"'

var story3 = 'Many say that brainstorming is {{adjective}} and does not {{verb}}. However, with the combination of the right computer and {{noun}} anyone can lead a good {{verb}}. When you have {{adverb}} pulled together a {{adjective}} group of {{noun}} in a big room with lots of TVs then  magical things will happen. In the past we have {{adverb}} suggested participants work together to find the most {{adjective}} solution. The most difficult part is many {{adjective}} {{noun}} like to {{verb}}. This has proved to be {{adverb}} problematic. But in the end the most important {{noun}} usually is brought to light. Typically we try to encourage ideas to {{verb}}, and never shut ideas down. This concludes our instructions. Thanks for {{adverb}} listening!'


var randVerbs = ['burp','tickle','die','flip'];
var randNouns = ['table','air','deer','solar system'];
var randAdjectives = ['red','tiny','stinky','dead'];
var randAdverbs = ['quickly','slowly','silently','happily'];

var btnStory1 = document.getElementById('story1');
var btnStory2 = document.getElementById('story2');
var btnStory3 = document.getElementById('story3');

var pulledNounsArray = document.getElementById('nouns');
var pulledVerbsArray = document.getElementById('verbs');
var pulledAdjectivesArray = document.getElementById('adjectives');
var pulledAdverbsArray = document.getElementById('adverbs');
var generate = document.getElementById('gen-mad-lib');
var madLibContainer = document.getElementById('mad-lib-container');
var noun = '{{noun}}';
var verb = '{{verb}}';
var adjective = '{{adjective}}';
var adverb = '{{adverb}}';
var story;