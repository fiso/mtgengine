"use strict";
const Constants = require ("../../../Constants");
const SpinalVillainBase = require("../setMED/SpinalVillain");

class SpinalVillain extends SpinalVillainBase {
  constructor (game) {
    super(game, "Spinal Villain", "Legends", "LEG");
  }
}

module.exports = SpinalVillain;
