"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PhantasmalMountBase = require("../setICE/PhantasmalMount.js");

class PhantasmalMount extends PhantasmalMountBase {
  constructor(game) {
    super(game, "Phantasmal Mount", "Masters Edition II", "ME2");
  }
}

module.exports = PhantasmalMount;
