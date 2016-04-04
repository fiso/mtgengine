"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ExpungeBase = require("../setUSG/Expunge.js");

class Expunge extends ExpungeBase {
  constructor(game) {
    super(game, "Expunge", "Vintage Masters", "VMA");
  }
}

module.exports = Expunge;
