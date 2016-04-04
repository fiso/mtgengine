"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FledglingDjinnBase = require("../setVMA/FledglingDjinn.js");

class FledglingDjinn extends FledglingDjinnBase {
  constructor(game) {
    super(game, "Fledgling Djinn", "Weatherlight", "WTH");
  }
}

module.exports = FledglingDjinn;
