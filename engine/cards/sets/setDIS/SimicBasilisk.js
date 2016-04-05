"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SimicBasilisk extends UnimplementedCard {
  constructor(game) {
    super(game, "Simic Basilisk", "Dissension", "DIS");
  }
}

module.exports = SimicBasilisk;
