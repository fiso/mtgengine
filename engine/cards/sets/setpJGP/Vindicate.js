"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const VindicateBase = require("../setAPC/Vindicate.js");

class Vindicate extends VindicateBase {
  constructor(game) {
    super(game, "Vindicate", "Judge Gift Program", "pJGP");
  }
}

module.exports = Vindicate;
