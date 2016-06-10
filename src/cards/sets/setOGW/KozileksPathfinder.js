"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KozileksPathfinder extends UnimplementedCard {
  constructor (game) {
    super(game, "Kozilek's Pathfinder", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = KozileksPathfinder;
