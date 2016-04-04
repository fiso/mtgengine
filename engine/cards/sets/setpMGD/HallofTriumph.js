"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HallofTriumphBase = require("../setJOU/HallofTriumph.js");

class HallofTriumph extends HallofTriumphBase {
  constructor(game) {
    super(game, "Hall of Triumph", "Magic Game Day", "pMGD");
  }
}

module.exports = HallofTriumph;
