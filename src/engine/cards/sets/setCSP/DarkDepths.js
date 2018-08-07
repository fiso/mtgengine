"use strict";
const Constants = require ("../../../Constants");
const DarkDepthsBase = require("../setV16/DarkDepths");

class DarkDepths extends DarkDepthsBase {
  constructor (game) {
    super(game, "Dark Depths", "Coldsnap", "CSP");
  }
}

module.exports = DarkDepths;
