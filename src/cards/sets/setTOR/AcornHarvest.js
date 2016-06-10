"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AcornHarvest extends UnimplementedCard {
  constructor (game) {
    super(game, "Acorn Harvest", "Torment", "TOR");
  }
}

module.exports = AcornHarvest;
