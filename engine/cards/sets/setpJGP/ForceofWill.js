"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ForceofWillBase = require("../setALL/ForceofWill.js");

class ForceofWill extends ForceofWillBase {
  constructor(game) {
    super(game, "Force of Will", "Judge Gift Program", "pJGP");
  }
}

module.exports = ForceofWill;
