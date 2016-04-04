"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LavaAxeBase = require("../setBTD/LavaAxe.js");

class LavaAxe extends LavaAxeBase {
  constructor(game) {
    super(game, "Lava Axe", "Eighth Edition", "8ED");
  }
}

module.exports = LavaAxe;
