"use strict";
const Constants = require ("../../../Constants");
const SeedbornMuseBase = require("../setLGN/SeedbornMuse");

class SeedbornMuse extends SeedbornMuseBase {
  constructor(game) {
    super(game, "Seedborn Muse", "Tenth Edition", "10E");
  }
}

module.exports = SeedbornMuse;
