"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HarvesterTroll extends UnimplementedCard {
  constructor (game) {
    super(game, "Harvester Troll", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = HarvesterTroll;
