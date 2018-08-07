"use strict";
const Constants = require ("../../../Constants");
const EssenceFlareBase = require("../setME2/EssenceFlare");

class EssenceFlare extends EssenceFlareBase {
  constructor (game) {
    super(game, "Essence Flare", "Coldsnap Theme Decks", "CST");
  }
}

module.exports = EssenceFlare;
