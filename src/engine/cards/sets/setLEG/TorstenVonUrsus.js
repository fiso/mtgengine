"use strict";
const Constants = require ("../../../Constants");
const TorstenVonUrsusBase = require("../setME3/TorstenVonUrsus");

class TorstenVonUrsus extends TorstenVonUrsusBase {
  constructor (game) {
    super(game, "Torsten Von Ursus", "Legends", "LEG");
  }
}

module.exports = TorstenVonUrsus;
