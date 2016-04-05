"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ToArms extends UnimplementedCard {
  constructor(game) {
    super(game, "To Arms!", "Guildpact", "GPT");
  }
}

module.exports = ToArms;
