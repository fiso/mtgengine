"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BlastfromthePast extends UnimplementedCard {
  constructor (game) {
    super(game, "Blast from the Past", "Unhinged", "UNH");
  }
}

module.exports = BlastfromthePast;
