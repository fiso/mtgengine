"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TyrantsFamiliar extends Card {
  constructor(game) {
    super(game, "Tyrant's Familiar", "Commander 2014", "C14");
  }
}

module.exports = TyrantsFamiliar;
