"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PrimalCommandBase = require("../setARC/PrimalCommand.js");

class PrimalCommand extends PrimalCommandBase {
  constructor(game) {
    super(game, "Primal Command", "Duel Decks: Zendikar vs. Eldrazi", "DDP");
  }
}

module.exports = PrimalCommand;
