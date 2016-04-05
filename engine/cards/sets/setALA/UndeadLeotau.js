"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UndeadLeotau extends UnimplementedCard {
  constructor(game) {
    super(game, "Undead Leotau", "Shards of Alara", "ALA");
  }
}

module.exports = UndeadLeotau;
