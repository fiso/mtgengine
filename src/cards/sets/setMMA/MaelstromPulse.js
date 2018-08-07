"use strict";
const Constants = require ("../../../Constants");
const MaelstromPulseBase = require("../setMP2/MaelstromPulse");

class MaelstromPulse extends MaelstromPulseBase {
  constructor (game) {
    super(game, "Maelstrom Pulse", "Modern Masters", "MMA");
  }
}

module.exports = MaelstromPulse;
