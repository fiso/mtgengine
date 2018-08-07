"use strict";
const Constants = require ("../../../Constants");
const EncroachingWastesBase = require("../setF14/EncroachingWastes");

class EncroachingWastes extends EncroachingWastesBase {
  constructor (game) {
    super(game, "Encroaching Wastes", "Magic 2014", "M14");
  }
}

module.exports = EncroachingWastes;
