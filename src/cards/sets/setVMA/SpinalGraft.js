"use strict";
const Constants = require ("../../../Constants");
const SpinalGraftBase = require("../setTPR/SpinalGraft");

class SpinalGraft extends SpinalGraftBase {
  constructor (game) {
    super(game, "Spinal Graft", "Vintage Masters", "VMA");
  }
}

module.exports = SpinalGraft;
