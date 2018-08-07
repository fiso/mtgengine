"use strict";
const Constants = require ("../../../Constants");
const WyluliWolfBase = require("../setMED/WyluliWolf");

class WyluliWolf extends WyluliWolfBase {
  constructor (game) {
    super(game, "Wyluli Wolf", "Arabian Nights", "ARN");
  }
}

module.exports = WyluliWolf;
