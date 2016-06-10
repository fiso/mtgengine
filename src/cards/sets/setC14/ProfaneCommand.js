"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ProfaneCommand extends UnimplementedCard {
  constructor (game) {
    super(game, "Profane Command", "Commander 2014", "C14");
  }
}

module.exports = ProfaneCommand;
