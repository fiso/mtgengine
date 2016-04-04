"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class UndeadLeotau extends Card {
  constructor(game) {
    super(game, "Undead Leotau", "Shards of Alara", "ALA");
  }
}

module.exports = UndeadLeotau;
