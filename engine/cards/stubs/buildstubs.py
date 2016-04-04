# -*- coding: utf-8 -*-
import json
import requests
import time
import sys
import os
import codecs
import time

def getFullResultAsJson(queryUrl):
	fullResult = []
	page = 0

	while True:
		r = requests.get("%s&page=%d" % (queryUrl, page))
		if len(r.json()) < 1:
			break

		fullResult.extend(r.json())
		page += 1

	return fullResult

def getCardsInSet(setId):
	cards = getFullResultAsJson("https://api.deckbrew.com/mtg/cards?set=%s" % setId)
	return cards

def getAllSets():
	sets = requests.get("https://api.deckbrew.com/mtg/sets")
	return sets.json()

def getCard(name, set):
	# FIXME
	queryUrl = "http://api.deckbrew.com/mtg/cards?name=%s" % name
	r = requests.get(queryUrl)
	cards = r.json()

	if len(cards) < 1:
		return None

	card = cards[0]
	bestMatch = None
	for cardIter in cards:
		pos = cardIter["name"].lower().find(name)
		if bestMatch is None or (pos != -1 and pos < bestMatch):
			bestMatch = pos
			card = cardIter

	return card

cardTemplate = ""
originalPrintings = {}
def generateStub(card, setId, folderName, setName):
	print "Building stub for %s..." % card["name"]

	illegalCharacters = u" ?!()\",.-'û®"
	className = card["name"]
	for char in illegalCharacters:
		className = className.replace(char, "")
	fileName = className + ".js"

	baseClass = "Card"
	requireString = ""
	if originalPrintings.has_key(card["name"]):
		# FIXME: is reprint - inherit from original printing
		# Should set correct baseclass name and insert require() for it
		baseClass = className + "Base"
		requireString = "const %sBase = require(\"../%s/%s.js\");\n" % (className, originalPrintings[card["name"]], className)
	else:
		originalPrintings[card["name"]] = folderName

	with codecs.open(os.path.join(".", folderName, fileName), "w", encoding="utf8") as f:
		classStub = cardTemplate.replace("___CARDNAME___", card["name"])
		classStub = classStub.replace("___CLASSNAME___", className)
		classStub = classStub.replace("___BASECLASS___", baseClass)
		classStub = classStub.replace("___REQUIRES___", requireString)
		classStub = classStub.replace("___SETNAME___", setName)
		classStub = classStub.replace("___SETCODE___", setId)
		f.write(classStub)

if __name__ == "__main__":
	startTime = time.time()
	sets = getAllSets()
	print "Found %d sets " % len(sets)
	print "Generating stubs..."
	numCards = 0
	uniqueCards = set()

	with open("CardTemplate.js", "r") as f:
		cardTemplate = f.read()

	for mtgSet in sets:
		# Why do we prefix our folder names like this, you ask?
		# Windows won't allow you to create a folder called "CON" is why...
		# And we don't want to make a special case for the Conspiracy set
		mtgSet["folderName"] = "set" + mtgSet["id"]

		try:
			os.mkdir(mtgSet["folderName"])
		except WindowsError:
			pass
		cards = getCardsInSet(mtgSet["id"])
		print "%s: %d cards" % (mtgSet["id"], len(cards))
		numCards += len(cards)
		for card in cards:
			if not card["name"] in uniqueCards:
				uniqueCards.add(card["name"])

			generateStub(card, mtgSet["id"], mtgSet["folderName"], mtgSet["name"])

	print "Found %d cards, %d unique" % (numCards, len(uniqueCards))
	print "Processing took %.1f seconds" % (time.time() - startTime)
	print "All sets processed"

# Found 28925 cards, 16188 unique
