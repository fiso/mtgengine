"use strict";
const Constants = require ("../../../Constants");
const EmrakultheAeonsTornBase = require("../setMM2/EmrakultheAeonsTorn");

class EmrakultheAeonsTorn extends EmrakultheAeonsTornBase {
  constructor (game) {
    super(game, "Emrakul, the Aeons Torn", "Magic Online Promos", "PRM");
  }
}

module.exports = EmrakultheAeonsTorn;
