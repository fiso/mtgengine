"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Lynx extends UnimplementedCard {
  constructor (game) {
    super(game, "Lynx", "Starter 1999", "S99");
  }
}

module.exports = Lynx;
