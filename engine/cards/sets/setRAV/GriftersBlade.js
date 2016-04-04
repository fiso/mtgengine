"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GriftersBlade extends Card {
  constructor(game) {
    super(game, "Grifter's Blade", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = GriftersBlade;
