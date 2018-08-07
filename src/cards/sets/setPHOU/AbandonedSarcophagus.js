"use strict";
const Constants = require ("../../../Constants");
const AbandonedSarcophagusBase = require("../setHOU/AbandonedSarcophagus");

class AbandonedSarcophagus extends AbandonedSarcophagusBase {
  constructor (game) {
    super(game, "Abandoned Sarcophagus", "Hour of Devastation Promos", "PHOU");
  }
}

module.exports = AbandonedSarcophagus;
