"use strict";
const Constants = require ("../../../Constants");
const SeedbornMuseBase = require("../setBBD/SeedbornMuse");

class SeedbornMuse extends SeedbornMuseBase {
  constructor (game) {
    super(game, "Seedborn Muse", "Ninth Edition", "9ED");
  }
}

module.exports = SeedbornMuse;
