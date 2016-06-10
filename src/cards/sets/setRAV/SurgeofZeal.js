"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SurgeofZeal extends UnimplementedCard {
  constructor (game) {
    super(game, "Surge of Zeal", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = SurgeofZeal;
