"use strict";
const Constants = require ("../../../Constants");
const BullElephantBase = require("../setVIS/BullElephant");

class BullElephant extends BullElephantBase {
  constructor (game) {
    super(game, "Bull Elephant", "Multiverse Gift Box", "MGB");
  }
}

module.exports = BullElephant;
