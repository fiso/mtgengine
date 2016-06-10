"use strict";
const Constants = require ("../../../Constants");
const BullElephantBase = require("../setMGB/BullElephant");

class BullElephant extends BullElephantBase {
  constructor (game) {
    super(game, "Bull Elephant", "Visions", "VIS");
  }
}

module.exports = BullElephant;
