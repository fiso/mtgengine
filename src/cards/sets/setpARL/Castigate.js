"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Castigate extends UnimplementedCard {
  constructor (game) {
    super(game, "Castigate", "Arena League", "pARL");
  }
}

module.exports = Castigate;
