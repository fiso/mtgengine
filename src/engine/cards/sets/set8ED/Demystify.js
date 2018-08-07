"use strict";
const Constants = require ("../../../Constants");
const DemystifyBase = require("../setXLN/Demystify");

class Demystify extends DemystifyBase {
  constructor (game) {
    super(game, "Demystify", "Eighth Edition", "8ED");
  }
}

module.exports = Demystify;
