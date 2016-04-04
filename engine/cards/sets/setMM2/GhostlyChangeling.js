"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GhostlyChangelingBase = require("../setLRW/GhostlyChangeling.js");

class GhostlyChangeling extends GhostlyChangelingBase {
  constructor(game) {
    super(game, "Ghostly Changeling", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = GhostlyChangeling;
