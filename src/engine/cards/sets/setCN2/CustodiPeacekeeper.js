"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CustodiPeacekeeper extends UnimplementedCard {
  constructor (game) {
    super(game, "Custodi Peacekeeper", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = CustodiPeacekeeper;
