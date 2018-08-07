"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BoxofFreeRangeGoblins extends UnimplementedCard {
  constructor (game) {
    super(game, "Box of Free-Range Goblins", "Unstable", "UST");
  }
}

module.exports = BoxofFreeRangeGoblins;
