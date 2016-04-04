"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RaziasPurification extends Card {
  constructor(game) {
    super(game, "Razia's Purification", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = RaziasPurification;
