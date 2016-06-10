"use strict";
const Constants = require ("../../../Constants");
const WyluliWolfBase = require("../setARN/WyluliWolf");

class WyluliWolf extends WyluliWolfBase {
  constructor (game) {
    super(game, "Wyluli Wolf", "Classic Sixth Edition", "6ED");
  }
}

module.exports = WyluliWolf;
