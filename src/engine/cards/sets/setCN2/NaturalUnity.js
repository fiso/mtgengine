"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NaturalUnity extends UnimplementedCard {
  constructor (game) {
    super(game, "Natural Unity", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = NaturalUnity;
