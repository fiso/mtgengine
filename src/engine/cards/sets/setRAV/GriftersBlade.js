"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GriftersBlade extends UnimplementedCard {
  constructor (game) {
    super(game, "Grifter's Blade", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = GriftersBlade;
