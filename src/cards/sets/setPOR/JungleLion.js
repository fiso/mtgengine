"use strict";
const Constants = require ("../../../Constants");
const JungleLionBase = require("../setTD0/JungleLion");

class JungleLion extends JungleLionBase {
  constructor (game) {
    super(game, "Jungle Lion", "Portal", "POR");
  }
}

module.exports = JungleLion;
