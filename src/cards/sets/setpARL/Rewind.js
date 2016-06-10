"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Rewind extends UnimplementedCard {
  constructor (game) {
    super(game, "Rewind", "Arena League", "pARL");
  }
}

module.exports = Rewind;
