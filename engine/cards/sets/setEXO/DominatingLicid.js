"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DominatingLicid extends Card {
  constructor(game) {
    super(game, "Dominating Licid", "Exodus", "EXO");
  }
}

module.exports = DominatingLicid;
