"use strict";
const Constants = require ("../../../Constants");
const PhantasmalMountBase = require("../setICE/PhantasmalMount");

class PhantasmalMount extends PhantasmalMountBase {
  constructor(game) {
    super(game, "Phantasmal Mount", "Masters Edition II", "ME2");
  }
}

module.exports = PhantasmalMount;
