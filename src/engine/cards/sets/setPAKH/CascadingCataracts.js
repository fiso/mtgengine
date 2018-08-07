"use strict";
const Constants = require ("../../../Constants");
const CascadingCataractsBase = require("../setAKH/CascadingCataracts");

class CascadingCataracts extends CascadingCataractsBase {
  constructor (game) {
    super(game, "Cascading Cataracts", "Amonkhet Promos", "PAKH");
  }
}

module.exports = CascadingCataracts;
