"use strict";
const Constants = require ("../../../Constants");
const WoollyThoctarBase = require("../setMM3/WoollyThoctar");

class WoollyThoctar extends WoollyThoctarBase {
  constructor (game) {
    super(game, "Woolly Thoctar", "Shards of Alara", "ALA");
  }
}

module.exports = WoollyThoctar;
