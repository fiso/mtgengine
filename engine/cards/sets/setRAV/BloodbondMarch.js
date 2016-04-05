"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BloodbondMarch extends UnimplementedCard {
  constructor(game) {
    super(game, "Bloodbond March", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = BloodbondMarch;
