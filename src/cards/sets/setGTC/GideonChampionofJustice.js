"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GideonChampionofJustice extends UnimplementedCard {
  constructor(game) {
    super(game, "Gideon, Champion of Justice", "Gatecrash", "GTC");
  }
}

module.exports = GideonChampionofJustice;
