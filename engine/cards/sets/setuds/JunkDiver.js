"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const JunkDiverBase = require("../setC14/JunkDiver.js");

class JunkDiver extends JunkDiverBase {
  constructor(game) {
    super(game, "Junk Diver", "Urza's Destiny", "UDS");
  }
}

module.exports = JunkDiver;
