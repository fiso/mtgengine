"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const EradicateBase = require("../setBOK/Eradicate.js");

class Eradicate extends EradicateBase {
  constructor(game) {
    super(game, "Eradicate", "Urza's Destiny", "UDS");
  }
}

module.exports = Eradicate;
