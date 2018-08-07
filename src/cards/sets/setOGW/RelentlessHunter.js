"use strict";
const Constants = require ("../../../Constants");
const RelentlessHunterBase = require("../setBBD/RelentlessHunter");

class RelentlessHunter extends RelentlessHunterBase {
  constructor (game) {
    super(game, "Relentless Hunter", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = RelentlessHunter;
