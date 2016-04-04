"use strict";
const Constants = require ("../../../Constants");
const DemystifyBase = require("../set8ED/Demystify");

class Demystify extends DemystifyBase {
  constructor(game) {
    super(game, "Demystify", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = Demystify;
