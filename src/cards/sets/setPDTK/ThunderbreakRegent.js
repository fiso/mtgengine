"use strict";
const Constants = require ("../../../Constants");
const ThunderbreakRegentBase = require("../setDTK/ThunderbreakRegent");

class ThunderbreakRegent extends ThunderbreakRegentBase {
  constructor (game) {
    super(game, "Thunderbreak Regent", "Dragons of Tarkir Promos", "PDTK");
  }
}

module.exports = ThunderbreakRegent;
