"use strict";
const Constants = require ("../../../Constants");
const IchoridBase = require("../setEMA/Ichorid");

class Ichorid extends IchoridBase {
  constructor (game) {
    super(game, "Ichorid", "Vintage Masters", "VMA");
  }
}

module.exports = Ichorid;
