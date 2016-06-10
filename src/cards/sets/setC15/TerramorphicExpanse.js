"use strict";
const Constants = require ("../../../Constants");
const TerramorphicExpanseBase = require("../setARC/TerramorphicExpanse");

class TerramorphicExpanse extends TerramorphicExpanseBase {
  constructor (game) {
    super(game, "Terramorphic Expanse", "Commander 2015", "C15");
  }
}

module.exports = TerramorphicExpanse;
