"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const EndlessCockroachesBase = require("../setC13/EndlessCockroaches.js");

class EndlessCockroaches extends EndlessCockroachesBase {
  constructor(game) {
    super(game, "Endless Cockroaches", "Portal", "POR");
  }
}

module.exports = EndlessCockroaches;
