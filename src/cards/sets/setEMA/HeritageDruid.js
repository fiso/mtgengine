"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HeritageDruid extends UnimplementedCard {
  constructor (game) {
    super(game, "Heritage Druid", "Eternal Masters", "EMA");
  }
}

module.exports = HeritageDruid;
