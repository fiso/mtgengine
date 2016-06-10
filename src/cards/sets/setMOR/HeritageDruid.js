"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HeritageDruid extends UnimplementedCard {
  constructor (game) {
    super(game, "Heritage Druid", "Morningtide", "MOR");
  }
}

module.exports = HeritageDruid;
