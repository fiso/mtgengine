"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ProfaneCommand extends UnimplementedCard {
  constructor (game) {
    super(game, "Profane Command", "Modern Masters 2015", "MM2");
  }
}

module.exports = ProfaneCommand;
