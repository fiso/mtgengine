"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OutriderenKor extends UnimplementedCard {
  constructor(game) {
    super(game, "Outrider en-Kor", "Time Spiral", "TSP");
  }
}

module.exports = OutriderenKor;
