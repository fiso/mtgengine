"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WortBoggartAuntie extends UnimplementedCard {
  constructor (game) {
    super(game, "Wort, Boggart Auntie", "Lorwyn", "LRW");
  }
}

module.exports = WortBoggartAuntie;
