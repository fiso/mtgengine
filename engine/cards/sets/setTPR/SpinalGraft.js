"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SpinalGraftBase = require("../setTMP/SpinalGraft.js");

class SpinalGraft extends SpinalGraftBase {
  constructor(game) {
    super(game, "Spinal Graft", "Tempest Remastered", "TPR");
  }
}

module.exports = SpinalGraft;
