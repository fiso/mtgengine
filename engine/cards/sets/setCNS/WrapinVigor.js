"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WrapinVigorBase = require("../setFUT/WrapinVigor.js");

class WrapinVigor extends WrapinVigorBase {
  constructor(game) {
    super(game, "Wrap in Vigor", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = WrapinVigor;
