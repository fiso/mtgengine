"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const OverwhelmingStampedeBase = require("../setC14/OverwhelmingStampede.js");

class OverwhelmingStampede extends OverwhelmingStampedeBase {
  constructor(game) {
    super(game, "Overwhelming Stampede", "Magic 2011", "M11");
  }
}

module.exports = OverwhelmingStampede;
