"use strict";
const Constants = require ("../../../Constants");
const SuntailHawkBase = require("../setM14/SuntailHawk");

class SuntailHawk extends SuntailHawkBase {
  constructor (game) {
    super(game, "Suntail Hawk", "Ninth Edition", "9ED");
  }
}

module.exports = SuntailHawk;
