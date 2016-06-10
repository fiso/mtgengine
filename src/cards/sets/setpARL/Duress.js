"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Duress extends UnimplementedCard {
  constructor (game) {
    super(game, "Duress", "Arena League", "pARL");
  }
}

module.exports = Duress;
