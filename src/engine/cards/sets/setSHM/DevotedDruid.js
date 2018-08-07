"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DevotedDruid extends UnimplementedCard {
  constructor (game) {
    super(game, "Devoted Druid", "Shadowmoor", "SHM");
  }
}

module.exports = DevotedDruid;
