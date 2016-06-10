"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Mise extends UnimplementedCard {
  constructor (game) {
    super(game, "Mise", "Arena League", "pARL");
  }
}

module.exports = Mise;
