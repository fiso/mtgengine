"use strict";
const Constants = require ("../../../Constants");
const HiddenDragonslayerBase = require("../setDTK/HiddenDragonslayer");

class HiddenDragonslayer extends HiddenDragonslayerBase {
  constructor (game) {
    super(game, "Hidden Dragonslayer", "Dragons of Tarkir Promos", "PDTK");
  }
}

module.exports = HiddenDragonslayer;
