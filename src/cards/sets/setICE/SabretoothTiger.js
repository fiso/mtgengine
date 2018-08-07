"use strict";
const Constants = require ("../../../Constants");
const SabretoothTigerBase = require("../set8ED/SabretoothTiger");

class SabretoothTiger extends SabretoothTigerBase {
  constructor (game) {
    super(game, "Sabretooth Tiger", "Ice Age", "ICE");
  }
}

module.exports = SabretoothTiger;
