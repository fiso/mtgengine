"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DemystifyBase = require("../set8ED/Demystify.js");

class Demystify extends DemystifyBase {
  constructor(game) {
    super(game, "Demystify", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = Demystify;
