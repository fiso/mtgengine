"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EqualTreatment extends Card {
  constructor(game) {
    super(game, "Equal Treatment", "Torment", "TOR");
  }
}

module.exports = EqualTreatment;
