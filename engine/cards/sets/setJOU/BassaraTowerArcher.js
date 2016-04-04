"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BassaraTowerArcher extends Card {
  constructor(game) {
    super(game, "Bassara Tower Archer", "Journey into Nyx", "JOU");
  }
}

module.exports = BassaraTowerArcher;
