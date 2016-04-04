"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ProfaneCommand extends Card {
  constructor(game) {
    super(game, "Profane Command", "Commander 2014", "C14");
  }
}

module.exports = ProfaneCommand;
