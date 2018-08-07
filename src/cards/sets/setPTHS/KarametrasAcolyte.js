"use strict";
const Constants = require ("../../../Constants");
const KarametrasAcolyteBase = require("../setTHS/KarametrasAcolyte");

class KarametrasAcolyte extends KarametrasAcolyteBase {
  constructor (game) {
    super(game, "Karametra's Acolyte", "Theros Promos", "PTHS");
  }
}

module.exports = KarametrasAcolyte;
