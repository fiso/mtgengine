"use strict";
const Constants = require ("../../../Constants");
const SabretoothTigerBase = require("../set8ED/SabretoothTiger");

class SabretoothTiger extends SabretoothTigerBase {
  constructor (game) {
    super(game, "Sabretooth Tiger", "Seventh Edition", "7ED");
  }
}

module.exports = SabretoothTiger;
