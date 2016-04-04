"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TorWaukiBase = require("../setCHR/TorWauki.js");

class TorWauki extends TorWaukiBase {
  constructor(game) {
    super(game, "Tor Wauki", "Legends", "LEG");
  }
}

module.exports = TorWauki;
