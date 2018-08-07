"use strict";
const Constants = require ("../../../Constants");
const HallofTriumphBase = require("../setTHP3/HallofTriumph");

class HallofTriumph extends HallofTriumphBase {
  constructor (game) {
    super(game, "Hall of Triumph", "Magic Online Promos", "PRM");
  }
}

module.exports = HallofTriumph;
