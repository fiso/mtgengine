"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AkiriLineSlinger extends UnimplementedCard {
  constructor (game) {
    super(game, "Akiri, Line-Slinger", "You Make the Cube", "PZ2");
  }
}

module.exports = AkiriLineSlinger;
