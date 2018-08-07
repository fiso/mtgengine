"use strict";
const Constants = require ("../../../Constants");
const AnointedProcessionBase = require("../setAKH/AnointedProcession");

class AnointedProcession extends AnointedProcessionBase {
  constructor (game) {
    super(game, "Anointed Procession", "Amonkhet Promos", "PAKH");
  }
}

module.exports = AnointedProcession;
