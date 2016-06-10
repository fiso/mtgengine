"use strict";
const Constants = require ("../../../Constants");
const GnarlidPackBase = require("../setCNS/GnarlidPack");

class GnarlidPack extends GnarlidPackBase {
  constructor (game) {
    super(game, "Gnarlid Pack", "Worldwake", "WWK");
  }
}

module.exports = GnarlidPack;
