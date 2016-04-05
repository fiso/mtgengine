"use strict";
const Constants = require ("../../../Constants");
const EssenceSliverBase = require("../setLGN/EssenceSliver");

class EssenceSliver extends EssenceSliverBase {
  constructor(game) {
    super(game, "Essence Sliver", "Time Spiral \"Timeshifted\"", "TSB");
  }
}

module.exports = EssenceSliver;
