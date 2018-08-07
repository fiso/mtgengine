"use strict";
const Constants = require ("../../../Constants");
const LysAlanaHuntmasterBase = require("../setCMA/LysAlanaHuntmaster");

class LysAlanaHuntmaster extends LysAlanaHuntmasterBase {
  constructor (game) {
    super(game, "Lys Alana Huntmaster", "Lorwyn", "LRW");
  }
}

module.exports = LysAlanaHuntmaster;
