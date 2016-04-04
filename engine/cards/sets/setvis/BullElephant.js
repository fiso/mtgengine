"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BullElephantBase = require("../setMGB/BullElephant.js");

class BullElephant extends BullElephantBase {
  constructor(game) {
    super(game, "Bull Elephant", "Visions", "VIS");
  }
}

module.exports = BullElephant;
