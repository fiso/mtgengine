"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WoodlandSleuth extends UnimplementedCard {
  constructor(game) {
    super(game, "Woodland Sleuth", "Innistrad", "ISD");
  }
}

module.exports = WoodlandSleuth;
