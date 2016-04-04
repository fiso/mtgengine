"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Wasteland extends UnimplementedCard {
  constructor(game) {
    super(game, "Wasteland", "Judge Gift Program", "pJGP");
  }
}

module.exports = Wasteland;
