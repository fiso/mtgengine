"use strict";
const Constants = require ("../../../Constants");
const TromokratisBase = require("../setBNG/Tromokratis");

class Tromokratis extends TromokratisBase {
  constructor (game) {
    super(game, "Tromokratis", "Magic Online Promos", "PRM");
  }
}

module.exports = Tromokratis;
