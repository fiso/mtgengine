"use strict";
const Constants = require ("../../../Constants");
const SparringMummyBase = require("../setBBD/SparringMummy");

class SparringMummy extends SparringMummyBase {
  constructor (game) {
    super(game, "Sparring Mummy", "Amonkhet", "AKH");
  }
}

module.exports = SparringMummy;
