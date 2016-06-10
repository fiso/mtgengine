"use strict";
const Constants = require ("../../../Constants");
const WeiStrikeForceBase = require("../setME3/WeiStrikeForce");

class WeiStrikeForce extends WeiStrikeForceBase {
  constructor (game) {
    super(game, "Wei Strike Force", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = WeiStrikeForce;
