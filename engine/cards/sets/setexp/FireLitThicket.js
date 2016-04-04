"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FireLitThicketBase = require("../setSHM/FireLitThicket.js");

class FireLitThicket extends FireLitThicketBase {
  constructor(game) {
    super(game, "Fire-Lit Thicket", "Zendikar Expedition", "EXP");
  }
}

module.exports = FireLitThicket;
