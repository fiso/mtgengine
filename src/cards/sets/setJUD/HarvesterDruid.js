"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HarvesterDruid extends UnimplementedCard {
  constructor (game) {
    super(game, "Harvester Druid", "Judgment", "JUD");
  }
}

module.exports = HarvesterDruid;
