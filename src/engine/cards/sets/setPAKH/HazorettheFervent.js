"use strict";
const Constants = require ("../../../Constants");
const HazorettheFerventBase = require("../setAKH/HazorettheFervent");

class HazorettheFervent extends HazorettheFerventBase {
  constructor (game) {
    super(game, "Hazoret the Fervent", "Amonkhet Promos", "PAKH");
  }
}

module.exports = HazorettheFervent;
