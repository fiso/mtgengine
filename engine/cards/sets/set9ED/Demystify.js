"use strict";
const Constants = require ("../../../Constants");
const DemystifyBase = require("../set8ED/Demystify");

class Demystify extends DemystifyBase {
  constructor(game) {
    super(game, "Demystify", "Ninth Edition", "9ED");
  }
}

module.exports = Demystify;
