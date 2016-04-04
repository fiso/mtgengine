"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DesertBase = require("../setARN/Desert.js");

class Desert extends DesertBase {
  constructor(game) {
    super(game, "Desert", "From the Vault: Realms", "V12");
  }
}

module.exports = Desert;
