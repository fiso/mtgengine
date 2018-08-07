"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Gainsay extends UnimplementedCard {
  constructor (game) {
    super(game, "Gainsay", "Theros", "THS");
  }
}

module.exports = Gainsay;
