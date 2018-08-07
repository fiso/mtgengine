"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CustodianoftheTrove extends UnimplementedCard {
  constructor (game) {
    super(game, "Custodian of the Trove", "Dragons of Tarkir", "DTK");
  }
}

module.exports = CustodianoftheTrove;
