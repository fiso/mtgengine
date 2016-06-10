"use strict";
const Constants = require ("../../../Constants");
const GhostlyChangelingBase = require("../setLRW/GhostlyChangeling");

class GhostlyChangeling extends GhostlyChangelingBase {
  constructor (game) {
    super(game, "Ghostly Changeling", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = GhostlyChangeling;
