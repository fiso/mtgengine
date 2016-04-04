"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MuckRatsBase = require("../setPOR/MuckRats.js");

class MuckRats extends MuckRatsBase {
  constructor(game) {
    super(game, "Muck Rats", "Starter 1999", "S99");
  }
}

module.exports = MuckRats;
