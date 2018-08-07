"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RivalsDuel extends UnimplementedCard {
  constructor (game) {
    super(game, "Rivals' Duel", "Planechase Anthology", "PCA");
  }
}

module.exports = RivalsDuel;
