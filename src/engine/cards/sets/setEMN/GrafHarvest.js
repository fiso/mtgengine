"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GrafHarvest extends UnimplementedCard {
  constructor (game) {
    super(game, "Graf Harvest", "Eldritch Moon", "EMN");
  }
}

module.exports = GrafHarvest;
