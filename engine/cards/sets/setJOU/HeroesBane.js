"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HeroesBane extends Card {
  constructor(game) {
    super(game, "Heroes' Bane", "Journey into Nyx", "JOU");
  }
}

module.exports = HeroesBane;
