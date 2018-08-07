"use strict";
const Constants = require ("../../../Constants");
const DemystifyBase = require("../setXLN/Demystify");

class Demystify extends DemystifyBase {
  constructor (game) {
    super(game, "Demystify", "Tenth Edition", "10E");
  }
}

module.exports = Demystify;
