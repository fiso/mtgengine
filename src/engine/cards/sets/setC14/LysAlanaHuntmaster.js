"use strict";
const Constants = require ("../../../Constants");
const LysAlanaHuntmasterBase = require("../setCMA/LysAlanaHuntmaster");

class LysAlanaHuntmaster extends LysAlanaHuntmasterBase {
  constructor (game) {
    super(game, "Lys Alana Huntmaster", "Commander 2014", "C14");
  }
}

module.exports = LysAlanaHuntmaster;
