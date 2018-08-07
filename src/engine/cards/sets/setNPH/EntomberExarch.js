"use strict";
const Constants = require ("../../../Constants");
const EntomberExarchBase = require("../setMM3/EntomberExarch");

class EntomberExarch extends EntomberExarchBase {
  constructor (game) {
    super(game, "Entomber Exarch", "New Phyrexia", "NPH");
  }
}

module.exports = EntomberExarch;
