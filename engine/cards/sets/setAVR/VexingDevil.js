"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VexingDevil extends Card {
  constructor(game) {
    super(game, "Vexing Devil", "Avacyn Restored", "AVR");
  }
}

module.exports = VexingDevil;
