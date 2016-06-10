"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Cloudseeder extends UnimplementedCard {
  constructor (game) {
    super(game, "Cloudseeder", "Future Sight", "FUT");
  }
}

module.exports = Cloudseeder;
