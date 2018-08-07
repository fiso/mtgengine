"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Eviscerator extends UnimplementedCard {
  constructor (game) {
    super(game, "Eviscerator", "Urza's Legacy", "ULG");
  }
}

module.exports = Eviscerator;
