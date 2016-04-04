"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class UncontrollableAnger extends Card {
  constructor(game) {
    super(game, "Uncontrollable Anger", "Champions of Kamigawa", "CHK");
  }
}

module.exports = UncontrollableAnger;
