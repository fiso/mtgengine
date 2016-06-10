"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CoordinatedBarrage extends UnimplementedCard {
  constructor (game) {
    super(game, "Coordinated Barrage", "Morningtide", "MOR");
  }
}

module.exports = CoordinatedBarrage;
