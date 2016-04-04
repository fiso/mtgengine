"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PuppetStrings extends Card {
  constructor(game) {
    super(game, "Puppet Strings", "Duel Decks: Phyrexia vs. the Coalition", "DDE");
  }
}

module.exports = PuppetStrings;
