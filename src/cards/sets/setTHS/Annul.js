"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Annul extends UnimplementedCard {
  constructor (game) {
    super(game, "Annul", "Theros", "THS");
  }
}

module.exports = Annul;
