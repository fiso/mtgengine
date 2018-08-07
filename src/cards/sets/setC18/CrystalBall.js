"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CrystalBall extends UnimplementedCard {
  constructor (game) {
    super(game, "Crystal Ball", "Commander 2018", "C18");
  }
}

module.exports = CrystalBall;
