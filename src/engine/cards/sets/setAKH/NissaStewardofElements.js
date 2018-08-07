"use strict";
const Constants = require ("../../../Constants");
const NissaStewardofElementsBase = require("../setPS17/NissaStewardofElements");

class NissaStewardofElements extends NissaStewardofElementsBase {
  constructor (game) {
    super(game, "Nissa, Steward of Elements", "Amonkhet", "AKH");
  }
}

module.exports = NissaStewardofElements;
