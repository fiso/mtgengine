"use strict";
const Constants = require ("../../../Constants");
const PegasusStampedeBase = require("../setTPR/PegasusStampede");

class PegasusStampede extends PegasusStampedeBase {
  constructor (game) {
    super(game, "Pegasus Stampede", "Exodus", "EXO");
  }
}

module.exports = PegasusStampede;
