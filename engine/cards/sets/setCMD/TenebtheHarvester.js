"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TenebtheHarvester extends UnimplementedCard {
  constructor(game) {
    super(game, "Teneb, the Harvester", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = TenebtheHarvester;
