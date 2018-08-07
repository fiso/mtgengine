"use strict";
const Constants = require ("../../../Constants");
const EndlessCockroachesBase = require("../setC13/EndlessCockroaches");

class EndlessCockroaches extends EndlessCockroachesBase {
  constructor (game) {
    super(game, "Endless Cockroaches", "Portal", "POR");
  }
}

module.exports = EndlessCockroaches;
