"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DryadSophisticate extends UnimplementedCard {
  constructor(game) {
    super(game, "Dryad Sophisticate", "Guildpact", "GPT");
  }
}

module.exports = DryadSophisticate;
