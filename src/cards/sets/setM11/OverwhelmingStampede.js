"use strict";
const Constants = require ("../../../Constants");
const OverwhelmingStampedeBase = require("../setCMA/OverwhelmingStampede");

class OverwhelmingStampede extends OverwhelmingStampedeBase {
  constructor (game) {
    super(game, "Overwhelming Stampede", "Magic 2011", "M11");
  }
}

module.exports = OverwhelmingStampede;
