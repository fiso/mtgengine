"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DosansOldestChant extends UnimplementedCard {
  constructor (game) {
    super(game, "Dosan's Oldest Chant", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = DosansOldestChant;
