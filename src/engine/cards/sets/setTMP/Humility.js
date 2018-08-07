"use strict";
const Constants = require ("../../../Constants");
const HumilityBase = require("../setTPR/Humility");

class Humility extends HumilityBase {
  constructor (game) {
    super(game, "Humility", "Tempest", "TMP");
  }
}

module.exports = Humility;
