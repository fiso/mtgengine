"use strict";
const Constants = require ("../../../Constants");
const GideonsPhalanxBase = require("../setPORI/GideonsPhalanx");

class GideonsPhalanx extends GideonsPhalanxBase {
  constructor (game) {
    super(game, "Gideon's Phalanx", "Magic Origins", "ORI");
  }
}

module.exports = GideonsPhalanx;
