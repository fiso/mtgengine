"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ConclaveEquenautBase = require("../setDDF/ConclaveEquenaut.js");

class ConclaveEquenaut extends ConclaveEquenautBase {
  constructor(game) {
    super(game, "Conclave Equenaut", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = ConclaveEquenaut;
