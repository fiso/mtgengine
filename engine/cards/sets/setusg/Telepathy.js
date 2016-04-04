"use strict";
const Constants = require ("../../../Constants");
const TelepathyBase = require("../set8ED/Telepathy");

class Telepathy extends TelepathyBase {
  constructor(game) {
    super(game, "Telepathy", "Urza's Saga", "USG");
  }
}

module.exports = Telepathy;
