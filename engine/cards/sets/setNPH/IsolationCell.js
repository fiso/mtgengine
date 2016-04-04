"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class IsolationCell extends Card {
  constructor(game) {
    super(game, "Isolation Cell", "New Phyrexia", "NPH");
  }
}

module.exports = IsolationCell;
