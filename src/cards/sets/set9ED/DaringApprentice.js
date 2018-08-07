"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DaringApprentice extends UnimplementedCard {
  constructor (game) {
    super(game, "Daring Apprentice", "Ninth Edition", "9ED");
  }
}

module.exports = DaringApprentice;
