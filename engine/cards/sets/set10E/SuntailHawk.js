"use strict";
const Constants = require ("../../../Constants");
const SuntailHawkBase = require("../set8ED/SuntailHawk");

class SuntailHawk extends SuntailHawkBase {
  constructor(game) {
    super(game, "Suntail Hawk", "Tenth Edition", "10E");
  }
}

module.exports = SuntailHawk;
