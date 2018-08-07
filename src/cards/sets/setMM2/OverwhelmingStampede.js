"use strict";
const Constants = require ("../../../Constants");
const OverwhelmingStampedeBase = require("../setCMA/OverwhelmingStampede");

class OverwhelmingStampede extends OverwhelmingStampedeBase {
  constructor (game) {
    super(game, "Overwhelming Stampede", "Modern Masters 2015", "MM2");
  }
}

module.exports = OverwhelmingStampede;
