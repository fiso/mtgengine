"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MaelstromPulseBase = require("../setARB/MaelstromPulse.js");

class MaelstromPulse extends MaelstromPulseBase {
  constructor(game) {
    super(game, "Maelstrom Pulse", "Modern Masters", "MMA");
  }
}

module.exports = MaelstromPulse;
