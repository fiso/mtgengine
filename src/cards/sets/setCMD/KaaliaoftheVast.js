"use strict";
const Constants = require ("../../../Constants");
const KaaliaoftheVastBase = require("../setCM1/KaaliaoftheVast");

class KaaliaoftheVast extends KaaliaoftheVastBase {
  constructor(game) {
    super(game, "Kaalia of the Vast", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = KaaliaoftheVast;
