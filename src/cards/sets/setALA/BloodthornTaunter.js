"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BloodthornTaunter extends UnimplementedCard {
  constructor (game) {
    super(game, "Bloodthorn Taunter", "Shards of Alara", "ALA");
  }
}

module.exports = BloodthornTaunter;
