"use strict";
const Constants = require ("../../../Constants");
const SkarrganFirebirdBase = require("../setE01/SkarrganFirebird");

class SkarrganFirebird extends SkarrganFirebirdBase {
  constructor (game) {
    super(game, "Skarrgan Firebird", "Guildpact", "GPT");
  }
}

module.exports = SkarrganFirebird;
