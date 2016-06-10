"use strict";
const Constants = require ("../../../Constants");
const MurderousBetrayalBase = require("../set8ED/MurderousBetrayal");

class MurderousBetrayal extends MurderousBetrayalBase {
  constructor (game) {
    super(game, "Murderous Betrayal", "Nemesis", "NMS");
  }
}

module.exports = MurderousBetrayal;
