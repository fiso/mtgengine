"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LightofSanction extends UnimplementedCard {
  constructor (game) {
    super(game, "Light of Sanction", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = LightofSanction;
