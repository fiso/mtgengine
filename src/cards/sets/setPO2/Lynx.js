"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Lynx extends UnimplementedCard {
  constructor (game) {
    super(game, "Lynx", "Portal Second Age", "PO2");
  }
}

module.exports = Lynx;
