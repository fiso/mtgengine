"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Kitesail extends UnimplementedCard {
  constructor (game) {
    super(game, "Kitesail", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = Kitesail;
