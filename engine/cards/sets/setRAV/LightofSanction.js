"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LightofSanction extends Card {
  constructor(game) {
    super(game, "Light of Sanction", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = LightofSanction;
