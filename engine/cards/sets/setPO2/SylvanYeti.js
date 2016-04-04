"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SylvanYeti extends Card {
  constructor(game) {
    super(game, "Sylvan Yeti", "Portal Second Age", "PO2");
  }
}

module.exports = SylvanYeti;
