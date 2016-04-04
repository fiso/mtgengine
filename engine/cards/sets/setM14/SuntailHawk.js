"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SuntailHawkBase = require("../set8ED/SuntailHawk.js");

class SuntailHawk extends SuntailHawkBase {
  constructor(game) {
    super(game, "Suntail Hawk", "Magic 2014 Core Set", "M14");
  }
}

module.exports = SuntailHawk;
