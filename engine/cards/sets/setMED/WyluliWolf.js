"use strict";
const Constants = require ("../../../Constants");
const WyluliWolfBase = require("../setARN/WyluliWolf");

class WyluliWolf extends WyluliWolfBase {
  constructor(game) {
    super(game, "Wyluli Wolf", "Masters Edition", "MED");
  }
}

module.exports = WyluliWolf;
