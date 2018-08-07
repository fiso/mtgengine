"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LilianasMastery extends UnimplementedCard {
  constructor (game) {
    super(game, "Liliana's Mastery", "Amonkhet", "AKH");
  }
}

module.exports = LilianasMastery;
