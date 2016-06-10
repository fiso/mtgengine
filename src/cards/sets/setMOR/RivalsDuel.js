"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RivalsDuel extends UnimplementedCard {
  constructor (game) {
    super(game, "Rivals' Duel", "Morningtide", "MOR");
  }
}

module.exports = RivalsDuel;
