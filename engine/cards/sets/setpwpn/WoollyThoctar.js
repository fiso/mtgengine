"use strict";
const Constants = require ("../../../Constants");
const WoollyThoctarBase = require("../setDDH/WoollyThoctar");

class WoollyThoctar extends WoollyThoctarBase {
  constructor(game) {
    super(game, "Woolly Thoctar", "WPN and Gateway", "pWPN");
  }
}

module.exports = WoollyThoctar;
