"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PuppetStrings extends UnimplementedCard {
  constructor (game) {
    super(game, "Puppet Strings", "Duel Decks: Phyrexia vs. the Coalition", "DDE");
  }
}

module.exports = PuppetStrings;
