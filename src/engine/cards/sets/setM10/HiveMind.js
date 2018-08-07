"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HiveMind extends UnimplementedCard {
  constructor (game) {
    super(game, "Hive Mind", "Magic 2010", "M10");
  }
}

module.exports = HiveMind;
