"use strict";
const Constants = require ("../../../Constants");
const SkarrganFirebirdBase = require("../setDDL/SkarrganFirebird");

class SkarrganFirebird extends SkarrganFirebirdBase {
  constructor (game) {
    super(game, "Skarrgan Firebird", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = SkarrganFirebird;
