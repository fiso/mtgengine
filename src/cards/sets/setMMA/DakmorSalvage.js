"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DakmorSalvage extends UnimplementedCard {
  constructor (game) {
    super(game, "Dakmor Salvage", "Modern Masters", "MMA");
  }
}

module.exports = DakmorSalvage;
