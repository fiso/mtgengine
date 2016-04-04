"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GlassdustHulkBase = require("../setARB/GlassdustHulk.js");

class GlassdustHulk extends GlassdustHulkBase {
  constructor(game) {
    super(game, "Glassdust Hulk", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = GlassdustHulk;
