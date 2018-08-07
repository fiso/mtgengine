"use strict";
const Constants = require ("../../../Constants");
const HallofTriumphBase = require("../setTHP3/HallofTriumph");

class HallofTriumph extends HallofTriumphBase {
  constructor (game) {
    super(game, "Hall of Triumph", "Journey into Nyx", "JOU");
  }
}

module.exports = HallofTriumph;
