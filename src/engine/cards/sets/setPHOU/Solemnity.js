"use strict";
const Constants = require ("../../../Constants");
const SolemnityBase = require("../setHOU/Solemnity");

class Solemnity extends SolemnityBase {
  constructor (game) {
    super(game, "Solemnity", "Hour of Devastation Promos", "PHOU");
  }
}

module.exports = Solemnity;
