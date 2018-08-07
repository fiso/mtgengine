"use strict";
const Constants = require ("../../../Constants");
const UrbisProtectorBase = require("../setA25/UrbisProtector");

class UrbisProtector extends UrbisProtectorBase {
  constructor (game) {
    super(game, "Urbis Protector", "Gatecrash", "GTC");
  }
}

module.exports = UrbisProtector;
