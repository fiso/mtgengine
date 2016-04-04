"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DeadlyGrub extends Card {
  constructor(game) {
    super(game, "Deadly Grub", "Planar Chaos", "PLC");
  }
}

module.exports = DeadlyGrub;
