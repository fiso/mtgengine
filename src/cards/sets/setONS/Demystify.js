"use strict";
const Constants = require ("../../../Constants");
const DemystifyBase = require("../setXLN/Demystify");

class Demystify extends DemystifyBase {
  constructor (game) {
    super(game, "Demystify", "Onslaught", "ONS");
  }
}

module.exports = Demystify;
