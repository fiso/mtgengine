"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DoublingCube extends UnimplementedCard {
  constructor (game) {
    super(game, "Doubling Cube", "Fifth Dawn", "5DN");
  }
}

module.exports = DoublingCube;
