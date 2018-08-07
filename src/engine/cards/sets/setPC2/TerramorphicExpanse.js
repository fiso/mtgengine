"use strict";
const Constants = require ("../../../Constants");
const TerramorphicExpanseBase = require("../setC18/TerramorphicExpanse");

class TerramorphicExpanse extends TerramorphicExpanseBase {
  constructor (game) {
    super(game, "Terramorphic Expanse", "Planechase 2012", "PC2");
  }
}

module.exports = TerramorphicExpanse;
