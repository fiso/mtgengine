"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TheProtector extends UnimplementedCard {
  constructor (game) {
    super(game, "The Protector", "Theros Hero's Path", "THP1");
  }
}

module.exports = TheProtector;
