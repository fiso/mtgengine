"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SpinalGraftBase = require("../setTMP/SpinalGraft.js");

class SpinalGraft extends SpinalGraftBase {
  constructor(game) {
    super(game, "Spinal Graft", "Vintage Masters", "VMA");
  }
}

module.exports = SpinalGraft;
