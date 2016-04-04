"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const NetherShadowBase = require("../setCED/NetherShadow.js");

class NetherShadow extends NetherShadowBase {
  constructor(game) {
    super(game, "Nether Shadow", "Masters Edition", "MED");
  }
}

module.exports = NetherShadow;
