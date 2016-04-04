"use strict";
const Constants = require ("../../../Constants");
const TerramorphicExpanseBase = require("../setARC/TerramorphicExpanse");

class TerramorphicExpanse extends TerramorphicExpanseBase {
  constructor(game) {
    super(game, "Terramorphic Expanse", "Premium Deck Series: Slivers", "H09");
  }
}

module.exports = TerramorphicExpanse;
