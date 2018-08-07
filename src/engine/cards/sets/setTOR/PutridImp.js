"use strict";
const Constants = require ("../../../Constants");
const PutridImpBase = require("../setVMA/PutridImp");

class PutridImp extends PutridImpBase {
  constructor (game) {
    super(game, "Putrid Imp", "Torment", "TOR");
  }
}

module.exports = PutridImp;
