"use strict";
const Constants = require ("../../../Constants");
const AkoumFirebirdBase = require("../setBFZ/AkoumFirebird");

class AkoumFirebird extends AkoumFirebirdBase {
  constructor (game) {
    super(game, "Akoum Firebird", "Battle for Zendikar Promos", "PBFZ");
  }
}

module.exports = AkoumFirebird;
