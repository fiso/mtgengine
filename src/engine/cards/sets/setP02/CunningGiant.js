"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CunningGiant extends UnimplementedCard {
  constructor (game) {
    super(game, "Cunning Giant", "Portal Second Age", "P02");
  }
}

module.exports = CunningGiant;
