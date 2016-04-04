"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PegasusStampedeBase = require("../setATH/PegasusStampede.js");

class PegasusStampede extends PegasusStampedeBase {
  constructor(game) {
    super(game, "Pegasus Stampede", "Exodus", "EXO");
  }
}

module.exports = PegasusStampede;
