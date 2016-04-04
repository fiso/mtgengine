"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SpinalVillainBase = require("../setLEG/SpinalVillain.js");

class SpinalVillain extends SpinalVillainBase {
  constructor(game) {
    super(game, "Spinal Villain", "Masters Edition", "MED");
  }
}

module.exports = SpinalVillain;
