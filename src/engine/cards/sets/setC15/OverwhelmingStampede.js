"use strict";
const Constants = require ("../../../Constants");
const OverwhelmingStampedeBase = require("../setCMA/OverwhelmingStampede");

class OverwhelmingStampede extends OverwhelmingStampedeBase {
  constructor (game) {
    super(game, "Overwhelming Stampede", "Commander 2015", "C15");
  }
}

module.exports = OverwhelmingStampede;
