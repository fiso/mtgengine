"use strict";
const Constants = require ("../../../Constants");
const TragicArroganceBase = require("../setPORI/TragicArrogance");

class TragicArrogance extends TragicArroganceBase {
  constructor (game) {
    super(game, "Tragic Arrogance", "Magic Origins", "ORI");
  }
}

module.exports = TragicArrogance;
