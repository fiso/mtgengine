"use strict";
const Constants = require ("../../../Constants");
const TranquilityBase = require("../setTPR/Tranquility");

class Tranquility extends TranquilityBase {
  constructor (game) {
    super(game, "Tranquility", "Intl. Collectors’ Edition", "CEI");
  }
}

module.exports = Tranquility;
