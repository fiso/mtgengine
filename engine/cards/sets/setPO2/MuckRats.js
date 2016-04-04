"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MuckRatsBase = require("../setPOR/MuckRats.js");

class MuckRats extends MuckRatsBase {
  constructor(game) {
    super(game, "Muck Rats", "Portal Second Age", "PO2");
  }
}

module.exports = MuckRats;
