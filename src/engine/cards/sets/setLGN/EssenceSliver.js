"use strict";
const Constants = require ("../../../Constants");
const EssenceSliverBase = require("../setTSB/EssenceSliver");

class EssenceSliver extends EssenceSliverBase {
  constructor (game) {
    super(game, "Essence Sliver", "Legions", "LGN");
  }
}

module.exports = EssenceSliver;
