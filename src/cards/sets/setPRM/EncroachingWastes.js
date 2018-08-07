"use strict";
const Constants = require ("../../../Constants");
const EncroachingWastesBase = require("../setF14/EncroachingWastes");

class EncroachingWastes extends EncroachingWastesBase {
  constructor (game) {
    super(game, "Encroaching Wastes", "Magic Online Promos", "PRM");
  }
}

module.exports = EncroachingWastes;
