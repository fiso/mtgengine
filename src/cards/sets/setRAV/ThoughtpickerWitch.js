"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThoughtpickerWitch extends UnimplementedCard {
  constructor (game) {
    super(game, "Thoughtpicker Witch", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = ThoughtpickerWitch;
