"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Infest extends UnimplementedCard {
  constructor (game) {
    super(game, "Infest", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = Infest;
