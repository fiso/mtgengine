"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class OnduCleric extends Card {
  constructor(game) {
    super(game, "Ondu Cleric", "Zendikar", "ZEN");
  }
}

module.exports = OnduCleric;
