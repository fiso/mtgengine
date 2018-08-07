"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WrapinVigor extends UnimplementedCard {
  constructor (game) {
    super(game, "Wrap in Vigor", "Conspiracy", "CNS");
  }
}

module.exports = WrapinVigor;
