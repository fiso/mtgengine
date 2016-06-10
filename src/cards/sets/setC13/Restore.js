"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Restore extends UnimplementedCard {
  constructor (game) {
    super(game, "Restore", "Commander 2013 Edition", "C13");
  }
}

module.exports = Restore;
