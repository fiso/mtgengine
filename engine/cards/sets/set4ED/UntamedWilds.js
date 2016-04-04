"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const UntamedWildsBase = require("../set6ED/UntamedWilds.js");

class UntamedWilds extends UntamedWildsBase {
  constructor(game) {
    super(game, "Untamed Wilds", "Fourth Edition", "4ED");
  }
}

module.exports = UntamedWilds;
