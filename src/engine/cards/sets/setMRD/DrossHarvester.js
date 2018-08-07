"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DrossHarvester extends UnimplementedCard {
  constructor (game) {
    super(game, "Dross Harvester", "Mirrodin", "MRD");
  }
}

module.exports = DrossHarvester;
