"use strict";
const Constants = require ("../../../Constants");
const GnarlidPackBase = require("../setMM2/GnarlidPack");

class GnarlidPack extends GnarlidPackBase {
  constructor (game) {
    super(game, "Gnarlid Pack", "Worldwake", "WWK");
  }
}

module.exports = GnarlidPack;
