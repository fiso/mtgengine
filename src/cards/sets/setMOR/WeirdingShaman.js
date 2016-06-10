"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WeirdingShaman extends UnimplementedCard {
  constructor (game) {
    super(game, "Weirding Shaman", "Morningtide", "MOR");
  }
}

module.exports = WeirdingShaman;
