"use strict";
const Constants = require ("../../../Constants");
const GempalmIncineratorBase = require("../setDDT/GempalmIncinerator");

class GempalmIncinerator extends GempalmIncineratorBase {
  constructor (game) {
    super(game, "Gempalm Incinerator", "World Championship Decks 2003", "WC03");
  }
}

module.exports = GempalmIncinerator;
