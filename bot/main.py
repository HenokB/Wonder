import cohere
import telebot

API_KEY = "{Telegram API Key from Bot Father}"

bot = telebot.TeleBot(API_KEY)
print("Bot is running!")
@bot.message_handler(commands=['start'])
def greet(message):
  bot.send_message(message.chat.id, "Hello, Welcome to Wonder Bot. Type /help to see avalible commands")

@bot.message_handler(commands=['help'])
def hello(message):
  bot.send_message(message.chat.id, """Available Commands :-
	
  learn (animal name)` - to know about animal
  /about - About 
	"""
  
  "")


@bot.message_handler(commands=['about'])
def greet(message):
  bot.send_message(message.chat.id, "This bot is made by Henok make sure to give the repo a star https://github.com/HenokB/Wonder")

def game_request(message):
  request = message.text.split()
  if len(request) < 2 or request[0].lower() not in "teach":
    return False
  else:
    return True

@bot.message_handler(func=game_request)
def send_price(message):
	g = message.text.split()[1]
	co = cohere.Client('{Cohere API Key}')

	response = co.generate(
		model='xlarge',
    prompt=f'This program will generate an introductory paragraph about animals to a blog post given the animal name.\n--\nBlog Title: Lion\nFirst Paragraph: The lion (Panthera leo) is a large cat of the genus Panthera native to Africa and India. It has a muscular, broad-chested body, short, rounded head, round ears, and a hairy tuft at the end of its tail. It is sexually dimorphic; adult male lions are larger than females and have a prominent mane. It is a social species, forming groups called pride. \n--\nBlog Title: Dog\nFirst Paragraph: The dog or domestic dog is a domesticated descendant of the wolf. The dog is derived from an ancient, extinct wolf, and the modern wolf is the dog\'s nearest living relative. The dog was the first species to be domesticated, by hunter-gatherers over 15,000 years ago,before the development of agriculture. Due to their long association with humans, dogs have expanded to a large number of domestic individuals.\n--\nBlog Title: Tiger\nFirst Paragraph: The tiger (Panthera tigris) is the largest cat species, most recognizable for its pattern of dark vertical stripes on reddish-orange fur with a lighter underside. It is an apex predator, primarily preying on ungulates such as deer and bovids. It is territorial and generally a solitary but social predator, requiring large contiguous areas of a habitat that support not only its prey but also its requirements to den, shelter, hibernate, and breed.\n--\nBlog Title:{g} Tiger\nFirst Paragraph:',		max_tokens=200,
		temperature=0.9,
		k=0,
		p=0.75,
		frequency_penalty=0,
		presence_penalty=0,
		stop_sequences=["--"],
		return_likelihoods='NONE')
	f=str('Here you go: {}'.format(response.generations[0].text))
  
	bot.send_message(message.chat.id, f)

def play_request(message):
  request = message.text.split()
  if len(request) < 3 or request[0].lower() not in "search for":
    return False
  else:
    return True

@bot.message_handler(func=play_request)
def send_link(message):
	g = message.text.split()[2]
	f = f"https://www.youtube.com/search?q={g}"

  
	bot.send_message(message.chat.id, f"Here you go:\n\n Click {f} to know more about {g}")

bot.polling()