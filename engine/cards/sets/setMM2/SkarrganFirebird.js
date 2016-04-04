"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SkarrganFirebirdBase = require("../setDDL/SkarrganFirebird.js");

class SkarrganFirebird extends SkarrganFirebirdBase {
  constructor(game) {
    super(game, "Skarrgan Firebird", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = SkarrganFirebird;
