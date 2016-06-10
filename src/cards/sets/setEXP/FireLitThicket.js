"use strict";
const Constants = require ("../../../Constants");
const FireLitThicketBase = require("../setSHM/FireLitThicket");

class FireLitThicket extends FireLitThicketBase {
  constructor (game) {
    super(game, "Fire-Lit Thicket", "Zendikar Expedition", "EXP");
  }
}

module.exports = FireLitThicket;
