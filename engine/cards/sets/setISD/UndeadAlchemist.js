"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class UndeadAlchemist extends Card {
  constructor(game) {
    super(game, "Undead Alchemist", "Innistrad", "ISD");
  }
}

module.exports = UndeadAlchemist;
