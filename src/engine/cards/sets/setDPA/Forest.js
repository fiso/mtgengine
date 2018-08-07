"use strict";
const Constants = require ("../../../Constants");
const ForestBase = require("../setC18/Forest");

class Forest extends ForestBase {
  constructor (game) {
    super(game, "Forest", "Duels of the Planeswalkers", "DPA");
  }
}

module.exports = Forest;
