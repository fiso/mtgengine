"use strict";
const Constants = require ("../../../Constants");
const ShelteredThicketBase = require("../setAKH/ShelteredThicket");

class ShelteredThicket extends ShelteredThicketBase {
  constructor (game) {
    super(game, "Sheltered Thicket", "Amonkhet Promos", "PAKH");
  }
}

module.exports = ShelteredThicket;
