"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Gainsay extends UnimplementedCard {
  constructor (game) {
    super(game, "Gainsay", "Planeshift", "PLS");
  }
}

module.exports = Gainsay;
