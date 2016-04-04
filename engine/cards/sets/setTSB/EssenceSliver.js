"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const EssenceSliverBase = require("../setLGN/EssenceSliver.js");

class EssenceSliver extends EssenceSliverBase {
  constructor(game) {
    super(game, "Essence Sliver", "Time Spiral "Timeshifted"", "TSB");
  }
}

module.exports = EssenceSliver;
