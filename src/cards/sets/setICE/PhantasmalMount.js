"use strict";
const Constants = require ("../../../Constants");
const PhantasmalMountBase = require("../setME2/PhantasmalMount");

class PhantasmalMount extends PhantasmalMountBase {
  constructor (game) {
    super(game, "Phantasmal Mount", "Ice Age", "ICE");
  }
}

module.exports = PhantasmalMount;
