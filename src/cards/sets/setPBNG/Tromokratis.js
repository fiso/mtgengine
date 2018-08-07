"use strict";
const Constants = require ("../../../Constants");
const TromokratisBase = require("../setBNG/Tromokratis");

class Tromokratis extends TromokratisBase {
  constructor (game) {
    super(game, "Tromokratis", "Born of the Gods Promos", "PBNG");
  }
}

module.exports = Tromokratis;
