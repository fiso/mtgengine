"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LonghornFirebeast extends Card {
  constructor(game) {
    super(game, "Longhorn Firebeast", "Torment", "TOR");
  }
}

module.exports = LonghornFirebeast;
