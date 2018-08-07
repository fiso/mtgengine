"use strict";
const Constants = require ("../../../Constants");
const GempalmIncineratorBase = require("../setDDT/GempalmIncinerator");

class GempalmIncinerator extends GempalmIncineratorBase {
  constructor (game) {
    super(game, "Gempalm Incinerator", "Legions", "LGN");
  }
}

module.exports = GempalmIncinerator;
