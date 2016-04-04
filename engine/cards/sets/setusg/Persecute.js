"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PersecuteBase = require("../set8ED/Persecute.js");

class Persecute extends PersecuteBase {
  constructor(game) {
    super(game, "Persecute", "Urza's Saga", "USG");
  }
}

module.exports = Persecute;
