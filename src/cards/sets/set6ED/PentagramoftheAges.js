"use strict";
const Constants = require ("../../../Constants");
const PentagramoftheAgesBase = require("../setME4/PentagramoftheAges");

class PentagramoftheAges extends PentagramoftheAgesBase {
  constructor (game) {
    super(game, "Pentagram of the Ages", "Classic Sixth Edition", "6ED");
  }
}

module.exports = PentagramoftheAges;
