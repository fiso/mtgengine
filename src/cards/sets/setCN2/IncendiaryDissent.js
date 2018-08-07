"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IncendiaryDissent extends UnimplementedCard {
  constructor (game) {
    super(game, "Incendiary Dissent", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = IncendiaryDissent;
