"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MoldAdder extends UnimplementedCard {
  constructor (game) {
    super(game, "Mold Adder", "Magic 2010", "M10");
  }
}

module.exports = MoldAdder;
