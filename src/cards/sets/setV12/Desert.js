"use strict";
const Constants = require ("../../../Constants");
const DesertBase = require("../setARN/Desert");

class Desert extends DesertBase {
  constructor (game) {
    super(game, "Desert", "From the Vault: Realms", "V12");
  }
}

module.exports = Desert;
