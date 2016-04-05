"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChameleonBlur extends UnimplementedCard {
  constructor(game) {
    super(game, "Chameleon Blur", "Time Spiral", "TSP");
  }
}

module.exports = ChameleonBlur;
