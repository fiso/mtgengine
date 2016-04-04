"use strict";
const Constants = require ("../../../Constants");
const TerramorphicExpanseBase = require("../setARC/TerramorphicExpanse");

class TerramorphicExpanse extends TerramorphicExpanseBase {
  constructor(game) {
    super(game, "Terramorphic Expanse", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = TerramorphicExpanse;
