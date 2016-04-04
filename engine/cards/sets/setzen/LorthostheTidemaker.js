"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LorthostheTidemakerBase = require("../setC14/LorthostheTidemaker.js");

class LorthostheTidemaker extends LorthostheTidemakerBase {
  constructor(game) {
    super(game, "Lorthos, the Tidemaker", "Zendikar", "ZEN");
  }
}

module.exports = LorthostheTidemaker;
