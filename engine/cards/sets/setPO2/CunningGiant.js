"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CunningGiant extends UnimplementedCard {
  constructor(game) {
    super(game, "Cunning Giant", "Portal Second Age", "PO2");
  }
}

module.exports = CunningGiant;
