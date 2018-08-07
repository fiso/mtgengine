"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KrosanDruid extends UnimplementedCard {
  constructor (game) {
    super(game, "Krosan Druid", "Dominaria", "DOM");
  }
}

module.exports = KrosanDruid;
