"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Gristleback extends UnimplementedCard {
  constructor(game) {
    super(game, "Gristleback", "Guildpact", "GPT");
  }
}

module.exports = Gristleback;
