"use strict";
const Constants = require ("../../../Constants");
const GempalmIncineratorBase = require("../setDDT/GempalmIncinerator");

class GempalmIncinerator extends GempalmIncineratorBase {
  constructor (game) {
    super(game, "Gempalm Incinerator", "You Make the Cube", "PZ2");
  }
}

module.exports = GempalmIncinerator;
