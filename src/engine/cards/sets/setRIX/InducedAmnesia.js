"use strict";
const Constants = require ("../../../Constants");
const InducedAmnesiaBase = require("../setPRIX/InducedAmnesia");

class InducedAmnesia extends InducedAmnesiaBase {
  constructor (game) {
    super(game, "Induced Amnesia", "Rivals of Ixalan", "RIX");
  }
}

module.exports = InducedAmnesia;
