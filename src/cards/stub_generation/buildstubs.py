# -*- coding: utf-8 -*-
import json
import requests
import time
import sys
import os
import codecs
import time
import platform

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
	cards = getFullResultAsJson("http://api.deckbrew.com/mtg/cards?set=%s" % setId)
	return cards

def getAllSets():
	sets = requests.get("http://api.deckbrew.com/mtg/sets")
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

def getSafeCardName(cardName):
	# This code must mirror the functionality in CardLoader.js
	illegalCharacters = u" ?!()\",.-'®:&"
	characterReplacements = {
		u"û": "u",
		u"ú": "u",
		u"ù": "u",
		u"â": "a",
		u"á": "a",
		u"à": "a",
		u"ê": "e",
		u"é": "e",
		u"è": "e",
		u"î": "i",
		u"í": "i",
		u"ì": "i",
		u"ö": "o",
		u"Æ": "Ae"
	}
	for char in illegalCharacters:
		cardName = cardName.replace(char, "")

	for dictionaryEntry in characterReplacements.iteritems():
		cardName = cardName.replace(dictionaryEntry[0], dictionaryEntry[1])

	# One card in all of Magic starts with a digit - 1996 World Champion
	if cardName[0].isdigit():
		cardName = "_" + cardName
	return cardName

cardTemplate = ""
originalPrintings = {}
def generateStub(card, setId, folderName, setName):
	print "Building stub for %s..." % card["name"]

	className = getSafeCardName(card["name"])
	fileName = className + ".js"

	baseClass = "UnimplementedCard"
	requireString = ""
	if originalPrintings.has_key(card["name"]):
		baseClass = className + "Base"
		requireString = "const %sBase = require(\"../%s/%s\");\n" % (className, originalPrintings[card["name"]], className)
	else:
		originalPrintings[card["name"]] = folderName
		requireString = "const UnimplementedCard = require(\"../../UnimplementedCard\");\n"

	with codecs.open(os.path.join(folderName, fileName), "w", encoding="utf8") as f:
		classStub = cardTemplate.replace("___CARDNAME___", card["name"].replace("\"", "\\\""))
		classStub = classStub.replace("___CLASSNAME___", className)
		classStub = classStub.replace("___BASECLASS___", baseClass)
		classStub = classStub.replace("___REQUIRES___", requireString)
		classStub = classStub.replace("___SETNAME___", setName.replace("\"", "\\\""))
		classStub = classStub.replace("___SETCODE___", setId)
		f.write(classStub)

if __name__ == "__main__":
	startTime = time.time()
	sets = getAllSets()
	print "Found %d sets " % len(sets)
	print "Generating stubs..."
	numCards = 0
	uniqueCards = set()

	with codecs.open("CardTemplate.js", "r", encoding="utf8") as f:
		cardTemplate = f.read()

	os.chdir("output")
	with codecs.open("sets.js", "w", encoding="utf8") as setsJs:
		setsJs.write("\"use strict\";\n")
		setsJs.write("module.exports = {\n")
		firstSet = True
		for mtgSet in sets:
			# Why do we prefix our folder names like this, you ask?
			# Windows won't allow you to create a folder called "CON" is why...
			# And we don't want to make a special case for the Conspiracy set
			mtgSet["folderName"] = os.path.join("set" + mtgSet["id"])

			try:
				os.mkdir(mtgSet["folderName"])
			except OSError:
				pass

			cards = getCardsInSet(mtgSet["id"])
			print "%s: %d cards" % (mtgSet["id"], len(cards))
			numCards += len(cards)

			with codecs.open(os.path.join(mtgSet["folderName"], "set.js"), "w", encoding="utf8") as setJs:
				setJs.write("\"use strict\";\n")
				setJs.write("module.exports = {\n")
				firstCard = True
				for card in cards:
					if not card["name"] in uniqueCards:
						uniqueCards.add(card["name"])

					generateStub(card, mtgSet["id"], mtgSet["folderName"], mtgSet["name"])
					if not firstCard:
						setJs.write(",\n")
					setJs.write("  %s: require(\"./%s\")" % (getSafeCardName(card["name"]), getSafeCardName(card["name"])))
					firstCard = False

				setJs.write("\n};\n")
				setJs.write("if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.%s = module.exports;}" % mtgSet["folderName"])

			if not firstSet:
				setsJs.write(",\n")
			setsJs.write("  set%s: require(\"./%s/set\")" % (mtgSet["id"], "set%s" % mtgSet["id"]))
			firstSet = False

		setsJs.write("\n};\n")

	print "Found %d cards, %d unique" % (numCards, len(uniqueCards))
	print "Processing took %.1f seconds" % (time.time() - startTime)
	print "All sets processed"

# Found 28925 cards, 16188 unique
