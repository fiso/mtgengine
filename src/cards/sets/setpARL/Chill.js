"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Chill extends UnimplementedCard {
  constructor (game) {
    super(game, "Chill", "Arena League", "pARL");
  }
}

module.exports = Chill;
