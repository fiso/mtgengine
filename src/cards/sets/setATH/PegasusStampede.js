"use strict";
const Constants = require ("../../../Constants");
const PegasusStampedeBase = require("../setTPR/PegasusStampede");

class PegasusStampede extends PegasusStampedeBase {
  constructor (game) {
    super(game, "Pegasus Stampede", "Anthologies", "ATH");
  }
}

module.exports = PegasusStampede;
