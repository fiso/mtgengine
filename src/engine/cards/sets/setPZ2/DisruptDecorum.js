"use strict";
const Constants = require ("../../../Constants");
const DisruptDecorumBase = require("../setC17/DisruptDecorum");

class DisruptDecorum extends DisruptDecorumBase {
  constructor (game) {
    super(game, "Disrupt Decorum", "You Make the Cube", "PZ2");
  }
}

module.exports = DisruptDecorum;
