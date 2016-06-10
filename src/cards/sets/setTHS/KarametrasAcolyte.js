"use strict";
const Constants = require ("../../../Constants");
const KarametrasAcolyteBase = require("../setpMEI/KarametrasAcolyte");

class KarametrasAcolyte extends KarametrasAcolyteBase {
  constructor (game) {
    super(game, "Karametra's Acolyte", "Theros", "THS");
  }
}

module.exports = KarametrasAcolyte;
