"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GrimFeast extends UnimplementedCard {
  constructor (game) {
    super(game, "Grim Feast", "Mirage", "MIR");
  }
}

module.exports = GrimFeast;
