"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShadowGuildmage extends UnimplementedCard {
  constructor (game) {
    super(game, "Shadow Guildmage", "Time Spiral Timeshifted", "TSB");
  }
}

module.exports = ShadowGuildmage;
