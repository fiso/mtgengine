"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ProfaneCommandBase = require("../setC14/ProfaneCommand.js");

class ProfaneCommand extends ProfaneCommandBase {
  constructor(game) {
    super(game, "Profane Command", "Duel Decks: Ajani vs. Nicol Bolas", "DDH");
  }
}

module.exports = ProfaneCommand;
