"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SporeFlowerBase = require("../setFEM/SporeFlower.js");

class SporeFlower extends SporeFlowerBase {
  constructor(game) {
    super(game, "Spore Flower", "Masters Edition II", "ME2");
  }
}

module.exports = SporeFlower;
