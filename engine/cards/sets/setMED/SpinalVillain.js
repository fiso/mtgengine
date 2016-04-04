"use strict";
const Constants = require ("../../../Constants");
const SpinalVillainBase = require("../setLEG/SpinalVillain");

class SpinalVillain extends SpinalVillainBase {
  constructor(game) {
    super(game, "Spinal Villain", "Masters Edition", "MED");
  }
}

module.exports = SpinalVillain;
