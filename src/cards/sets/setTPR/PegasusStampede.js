"use strict";
const Constants = require ("../../../Constants");
const PegasusStampedeBase = require("../setATH/PegasusStampede");

class PegasusStampede extends PegasusStampedeBase {
  constructor(game) {
    super(game, "Pegasus Stampede", "Tempest Remastered", "TPR");
  }
}

module.exports = PegasusStampede;
