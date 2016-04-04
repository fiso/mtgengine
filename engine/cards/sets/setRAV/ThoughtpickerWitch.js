"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ThoughtpickerWitch extends Card {
  constructor(game) {
    super(game, "Thoughtpicker Witch", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = ThoughtpickerWitch;
