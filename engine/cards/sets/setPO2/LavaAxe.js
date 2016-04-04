"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LavaAxeBase = require("../setBTD/LavaAxe.js");

class LavaAxe extends LavaAxeBase {
  constructor(game) {
    super(game, "Lava Axe", "Portal Second Age", "PO2");
  }
}

module.exports = LavaAxe;
