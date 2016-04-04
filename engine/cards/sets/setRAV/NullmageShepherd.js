"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NullmageShepherd extends Card {
  constructor(game) {
    super(game, "Nullmage Shepherd", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = NullmageShepherd;
