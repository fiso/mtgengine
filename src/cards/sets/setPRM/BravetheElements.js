"use strict";
const Constants = require ("../../../Constants");
const BravetheElementsBase = require("../setC14/BravetheElements");

class BravetheElements extends BravetheElementsBase {
  constructor (game) {
    super(game, "Brave the Elements", "Magic Online Promos", "PRM");
  }
}

module.exports = BravetheElements;
