"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BassaraTowerArcher extends UnimplementedCard {
  constructor(game) {
    super(game, "Bassara Tower Archer", "Journey into Nyx", "JOU");
  }
}

module.exports = BassaraTowerArcher;
