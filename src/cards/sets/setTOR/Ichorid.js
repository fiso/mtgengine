"use strict";
const Constants = require ("../../../Constants");
const IchoridBase = require("../setEMA/Ichorid");

class Ichorid extends IchoridBase {
  constructor (game) {
    super(game, "Ichorid", "Torment", "TOR");
  }
}

module.exports = Ichorid;
