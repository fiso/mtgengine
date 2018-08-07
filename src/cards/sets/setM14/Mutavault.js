"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Mutavault extends UnimplementedCard {
  constructor (game) {
    super(game, "Mutavault", "Magic 2014", "M14");
  }
}

module.exports = Mutavault;
