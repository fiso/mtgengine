"use strict";
const Constants = require ("../../../Constants");
const TranquilExpanseBase = require("../setC18/TranquilExpanse");

class TranquilExpanse extends TranquilExpanseBase {
  constructor (game) {
    super(game, "Tranquil Expanse", "Aether Revolt", "AER");
  }
}

module.exports = TranquilExpanse;
