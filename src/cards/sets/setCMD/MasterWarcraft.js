"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MasterWarcraft extends UnimplementedCard {
  constructor (game) {
    super(game, "Master Warcraft", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = MasterWarcraft;
