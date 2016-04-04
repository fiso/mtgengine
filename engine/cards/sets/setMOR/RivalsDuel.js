"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RivalsDuel extends Card {
  constructor(game) {
    super(game, "Rivals' Duel", "Morningtide", "MOR");
  }
}

module.exports = RivalsDuel;
