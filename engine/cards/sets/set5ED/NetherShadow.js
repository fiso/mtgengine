"use strict";
const Constants = require ("../../../Constants");
const NetherShadowBase = require("../setCED/NetherShadow");

class NetherShadow extends NetherShadowBase {
  constructor(game) {
    super(game, "Nether Shadow", "Fifth Edition", "5ED");
  }
}

module.exports = NetherShadow;
