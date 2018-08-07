"use strict";
const Constants = require ("../../../Constants");
const GlintSleeveSiphonerBase = require("../setAER/GlintSleeveSiphoner");

class GlintSleeveSiphoner extends GlintSleeveSiphonerBase {
  constructor (game) {
    super(game, "Glint-Sleeve Siphoner", "Aether Revolt Promos", "PAER");
  }
}

module.exports = GlintSleeveSiphoner;
