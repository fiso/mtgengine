"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LooterilKor extends UnimplementedCard {
  constructor (game) {
    super(game, "Looter il-Kor", "Time Spiral", "TSP");
  }
}

module.exports = LooterilKor;
