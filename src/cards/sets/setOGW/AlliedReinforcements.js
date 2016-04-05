"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AlliedReinforcements extends UnimplementedCard {
  constructor(game) {
    super(game, "Allied Reinforcements", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = AlliedReinforcements;
