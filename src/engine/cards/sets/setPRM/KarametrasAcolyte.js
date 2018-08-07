"use strict";
const Constants = require ("../../../Constants");
const KarametrasAcolyteBase = require("../setTHS/KarametrasAcolyte");

class KarametrasAcolyte extends KarametrasAcolyteBase {
  constructor (game) {
    super(game, "Karametra's Acolyte", "Magic Online Promos", "PRM");
  }
}

module.exports = KarametrasAcolyte;
