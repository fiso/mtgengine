"use strict";
const Constants = require ("../../../Constants");
const ProwlingSerpopardBase = require("../setAKH/ProwlingSerpopard");

class ProwlingSerpopard extends ProwlingSerpopardBase {
  constructor (game) {
    super(game, "Prowling Serpopard", "Amonkhet Promos", "PAKH");
  }
}

module.exports = ProwlingSerpopard;
