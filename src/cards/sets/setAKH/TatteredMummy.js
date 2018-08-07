"use strict";
const Constants = require ("../../../Constants");
const TatteredMummyBase = require("../setM19/TatteredMummy");

class TatteredMummy extends TatteredMummyBase {
  constructor (game) {
    super(game, "Tattered Mummy", "Amonkhet", "AKH");
  }
}

module.exports = TatteredMummy;
