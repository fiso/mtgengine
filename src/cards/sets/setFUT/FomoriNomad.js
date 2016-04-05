"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FomoriNomad extends UnimplementedCard {
  constructor(game) {
    super(game, "Fomori Nomad", "Future Sight", "FUT");
  }
}

module.exports = FomoriNomad;
