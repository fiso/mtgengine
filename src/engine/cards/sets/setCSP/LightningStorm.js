"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LightningStorm extends UnimplementedCard {
  constructor (game) {
    super(game, "Lightning Storm", "Coldsnap", "CSP");
  }
}

module.exports = LightningStorm;
