"use strict";
const Constants = require ("../../../Constants");
const GnarlidPackBase = require("../setCNS/GnarlidPack");

class GnarlidPack extends GnarlidPackBase {
  constructor(game) {
    super(game, "Gnarlid Pack", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = GnarlidPack;
