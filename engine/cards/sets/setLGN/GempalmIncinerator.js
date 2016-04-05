"use strict";
const Constants = require ("../../../Constants");
const GempalmIncineratorBase = require("../setDD3_EVG/GempalmIncinerator");

class GempalmIncinerator extends GempalmIncineratorBase {
  constructor(game) {
    super(game, "Gempalm Incinerator", "Legions", "LGN");
  }
}

module.exports = GempalmIncinerator;
