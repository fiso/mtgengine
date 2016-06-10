"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpectersShroud extends UnimplementedCard {
  constructor (game) {
    super(game, "Specter's Shroud", "Darksteel", "DST");
  }
}

module.exports = SpectersShroud;
