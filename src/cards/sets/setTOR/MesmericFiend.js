"use strict";
const Constants = require ("../../../Constants");
const MesmericFiendBase = require("../setDDK/MesmericFiend");

class MesmericFiend extends MesmericFiendBase {
  constructor (game) {
    super(game, "Mesmeric Fiend", "Torment", "TOR");
  }
}

module.exports = MesmericFiend;
