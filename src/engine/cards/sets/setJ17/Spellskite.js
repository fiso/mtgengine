"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Spellskite extends UnimplementedCard {
  constructor (game) {
    super(game, "Spellskite", "Judge Gift Cards 2017", "J17");
  }
}

module.exports = Spellskite;
