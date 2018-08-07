"use strict";
const Constants = require ("../../../Constants");
const NetherShadowBase = require("../setMED/NetherShadow");

class NetherShadow extends NetherShadowBase {
  constructor (game) {
    super(game, "Nether Shadow", "Collectors’ Edition", "CED");
  }
}

module.exports = NetherShadow;
