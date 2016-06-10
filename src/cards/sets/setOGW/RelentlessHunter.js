"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RelentlessHunter extends UnimplementedCard {
  constructor (game) {
    super(game, "Relentless Hunter", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = RelentlessHunter;
