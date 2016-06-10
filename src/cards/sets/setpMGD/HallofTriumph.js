"use strict";
const Constants = require ("../../../Constants");
const HallofTriumphBase = require("../setJOU/HallofTriumph");

class HallofTriumph extends HallofTriumphBase {
  constructor (game) {
    super(game, "Hall of Triumph", "Magic Game Day", "pMGD");
  }
}

module.exports = HallofTriumph;
