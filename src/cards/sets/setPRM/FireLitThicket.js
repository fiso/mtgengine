"use strict";
const Constants = require ("../../../Constants");
const FireLitThicketBase = require("../setEXP/FireLitThicket");

class FireLitThicket extends FireLitThicketBase {
  constructor (game) {
    super(game, "Fire-Lit Thicket", "Magic Online Promos", "PRM");
  }
}

module.exports = FireLitThicket;
