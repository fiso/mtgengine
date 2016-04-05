"use strict";
const Constants = require ("../../../Constants");
const NetherShadowBase = require("../setCED/NetherShadow");

class NetherShadow extends NetherShadowBase {
  constructor(game) {
    super(game, "Nether Shadow", "Fourth Edition", "4ED");
  }
}

module.exports = NetherShadow;
