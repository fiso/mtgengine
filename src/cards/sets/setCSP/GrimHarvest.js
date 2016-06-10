"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GrimHarvest extends UnimplementedCard {
  constructor (game) {
    super(game, "Grim Harvest", "Coldsnap", "CSP");
  }
}

module.exports = GrimHarvest;
