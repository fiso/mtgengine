"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DwarvenShrine extends UnimplementedCard {
  constructor(game) {
    super(game, "Dwarven Shrine", "Odyssey", "ODY");
  }
}

module.exports = DwarvenShrine;
