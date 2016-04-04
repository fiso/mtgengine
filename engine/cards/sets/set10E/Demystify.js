"use strict";
const Constants = require ("../../../Constants");
const DemystifyBase = require("../set8ED/Demystify");

class Demystify extends DemystifyBase {
  constructor(game) {
    super(game, "Demystify", "Tenth Edition", "10E");
  }
}

module.exports = Demystify;
