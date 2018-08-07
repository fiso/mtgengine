"use strict";
const Constants = require ("../../../Constants");
const TranquilExpanseBase = require("../setC18/TranquilExpanse");

class TranquilExpanse extends TranquilExpanseBase {
  constructor (game) {
    super(game, "Tranquil Expanse", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = TranquilExpanse;
