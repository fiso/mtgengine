"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GnarlidPackBase = require("../setCNS/GnarlidPack.js");

class GnarlidPack extends GnarlidPackBase {
  constructor(game) {
    super(game, "Gnarlid Pack", "Worldwake", "WWK");
  }
}

module.exports = GnarlidPack;
