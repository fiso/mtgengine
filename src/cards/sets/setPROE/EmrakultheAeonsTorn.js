"use strict";
const Constants = require ("../../../Constants");
const EmrakultheAeonsTornBase = require("../setMM2/EmrakultheAeonsTorn");

class EmrakultheAeonsTorn extends EmrakultheAeonsTornBase {
  constructor (game) {
    super(game, "Emrakul, the Aeons Torn", "Rise of the Eldrazi Promos", "PROE");
  }
}

module.exports = EmrakultheAeonsTorn;
