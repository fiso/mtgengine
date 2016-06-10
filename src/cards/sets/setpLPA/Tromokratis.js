"use strict";
const Constants = require ("../../../Constants");
const TromokratisBase = require("../setBNG/Tromokratis");

class Tromokratis extends TromokratisBase {
  constructor (game) {
    super(game, "Tromokratis", "Launch Parties", "pLPA");
  }
}

module.exports = Tromokratis;
