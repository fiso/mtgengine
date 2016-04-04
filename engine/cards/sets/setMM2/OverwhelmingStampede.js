"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const OverwhelmingStampedeBase = require("../setC14/OverwhelmingStampede.js");

class OverwhelmingStampede extends OverwhelmingStampedeBase {
  constructor(game) {
    super(game, "Overwhelming Stampede", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = OverwhelmingStampede;
