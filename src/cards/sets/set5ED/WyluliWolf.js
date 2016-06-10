"use strict";
const Constants = require ("../../../Constants");
const WyluliWolfBase = require("../setARN/WyluliWolf");

class WyluliWolf extends WyluliWolfBase {
  constructor (game) {
    super(game, "Wyluli Wolf", "Fifth Edition", "5ED");
  }
}

module.exports = WyluliWolf;
