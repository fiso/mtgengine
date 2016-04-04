"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GeralfsMessenger extends Card {
  constructor(game) {
    super(game, "Geralf's Messenger", "Dark Ascension", "DKA");
  }
}

module.exports = GeralfsMessenger;
