"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ImpulseBase = require("../setBTD/Impulse.js");

class Impulse extends ImpulseBase {
  constructor(game) {
    super(game, "Impulse", "From the Vault: Twenty", "V13");
  }
}

module.exports = Impulse;
