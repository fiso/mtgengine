"use strict";
const Constants = require ("../../../Constants");
const TerritorialAllosaurusBase = require("../setDOM/TerritorialAllosaurus");

class TerritorialAllosaurus extends TerritorialAllosaurusBase {
  constructor (game) {
    super(game, "Territorial Allosaurus", "Dominaria Promos", "PDOM");
  }
}

module.exports = TerritorialAllosaurus;
