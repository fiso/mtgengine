"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EchoingBoon extends UnimplementedCard {
  constructor (game) {
    super(game, "Echoing Boon", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = EchoingBoon;
