"use strict";
const Constants = require ("../../../Constants");
const ArcLightningBase = require("../setUGIN/ArcLightning");

class ArcLightning extends ArcLightningBase {
  constructor (game) {
    super(game, "Arc Lightning", "World Championship Decks 1999", "WC99");
  }
}

module.exports = ArcLightning;
