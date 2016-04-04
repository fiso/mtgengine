"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GnarlidPackBase = require("../setCNS/GnarlidPack.js");

class GnarlidPack extends GnarlidPackBase {
  constructor(game) {
    super(game, "Gnarlid Pack", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = GnarlidPack;
