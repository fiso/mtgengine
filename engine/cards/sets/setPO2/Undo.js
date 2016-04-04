"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Undo extends Card {
  constructor(game) {
    super(game, "Undo", "Portal Second Age", "PO2");
  }
}

module.exports = Undo;
