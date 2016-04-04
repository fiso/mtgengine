"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ThatWhichWasTaken extends Card {
  constructor(game) {
    super(game, "That Which Was Taken", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = ThatWhichWasTaken;
