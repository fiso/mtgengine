"use strict";
const Constants = require ("../../../Constants");
const FireLitThicketBase = require("../setEXP/FireLitThicket");

class FireLitThicket extends FireLitThicketBase {
  constructor (game) {
    super(game, "Fire-Lit Thicket", "Shadowmoor", "SHM");
  }
}

module.exports = FireLitThicket;
