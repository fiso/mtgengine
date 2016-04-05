"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RumblingSlum extends UnimplementedCard {
  constructor(game) {
    super(game, "Rumbling Slum", "Guildpact", "GPT");
  }
}

module.exports = RumblingSlum;
