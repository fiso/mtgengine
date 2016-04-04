"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MurderousBetrayalBase = require("../set8ED/MurderousBetrayal.js");

class MurderousBetrayal extends MurderousBetrayalBase {
  constructor(game) {
    super(game, "Murderous Betrayal", "Nemesis", "NMS");
  }
}

module.exports = MurderousBetrayal;
