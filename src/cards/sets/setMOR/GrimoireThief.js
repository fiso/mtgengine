"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GrimoireThief extends UnimplementedCard {
  constructor(game) {
    super(game, "Grimoire Thief", "Morningtide", "MOR");
  }
}

module.exports = GrimoireThief;
