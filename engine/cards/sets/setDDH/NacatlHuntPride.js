"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const NacatlHuntPrideBase = require("../setCON/NacatlHuntPride.js");

class NacatlHuntPride extends NacatlHuntPrideBase {
  constructor(game) {
    super(game, "Nacatl Hunt-Pride", "Duel Decks: Ajani vs. Nicol Bolas", "DDH");
  }
}

module.exports = NacatlHuntPride;
