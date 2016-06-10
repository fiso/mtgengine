"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OjutaisSummons extends UnimplementedCard {
  constructor (game) {
    super(game, "Ojutai's Summons", "Dragons of Tarkir", "DTK");
  }
}

module.exports = OjutaisSummons;
