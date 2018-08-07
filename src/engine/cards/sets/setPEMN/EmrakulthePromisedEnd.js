"use strict";
const Constants = require ("../../../Constants");
const EmrakulthePromisedEndBase = require("../setEMN/EmrakulthePromisedEnd");

class EmrakulthePromisedEnd extends EmrakulthePromisedEndBase {
  constructor (game) {
    super(game, "Emrakul, the Promised End", "Eldritch Moon Promos", "PEMN");
  }
}

module.exports = EmrakulthePromisedEnd;
