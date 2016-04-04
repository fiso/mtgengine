"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RagingRiverBase = require("../setCED/RagingRiver.js");

class RagingRiver extends RagingRiverBase {
  constructor(game) {
    super(game, "Raging River", "Limited Edition Alpha", "LEA");
  }
}

module.exports = RagingRiver;
