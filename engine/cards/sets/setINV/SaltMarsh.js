"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SaltMarshBase = require("../set8ED/SaltMarsh.js");

class SaltMarsh extends SaltMarshBase {
  constructor(game) {
    super(game, "Salt Marsh", "Invasion", "INV");
  }
}

module.exports = SaltMarsh;
