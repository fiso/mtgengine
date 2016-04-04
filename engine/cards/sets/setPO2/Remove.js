"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Remove extends Card {
  constructor(game) {
    super(game, "Remove", "Portal Second Age", "PO2");
  }
}

module.exports = Remove;
