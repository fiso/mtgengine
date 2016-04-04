"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Evermind extends Card {
  constructor(game) {
    super(game, "Evermind", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = Evermind;
