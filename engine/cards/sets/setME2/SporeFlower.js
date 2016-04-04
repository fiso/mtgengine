"use strict";
const Constants = require ("../../../Constants");
const SporeFlowerBase = require("../setFEM/SporeFlower");

class SporeFlower extends SporeFlowerBase {
  constructor(game) {
    super(game, "Spore Flower", "Masters Edition II", "ME2");
  }
}

module.exports = SporeFlower;
