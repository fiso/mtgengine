"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DevoutMonk extends UnimplementedCard {
  constructor (game) {
    super(game, "Devout Monk", "Starter 1999", "S99");
  }
}

module.exports = DevoutMonk;
