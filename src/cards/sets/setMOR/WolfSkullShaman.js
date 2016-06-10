"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WolfSkullShaman extends UnimplementedCard {
  constructor (game) {
    super(game, "Wolf-Skull Shaman", "Morningtide", "MOR");
  }
}

module.exports = WolfSkullShaman;
