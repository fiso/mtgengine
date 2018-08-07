"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Outwit extends UnimplementedCard {
  constructor (game) {
    super(game, "Outwit", "Avacyn Restored", "AVR");
  }
}

module.exports = Outwit;
