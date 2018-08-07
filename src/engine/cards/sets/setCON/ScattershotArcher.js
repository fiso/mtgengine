"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ScattershotArcher extends UnimplementedCard {
  constructor (game) {
    super(game, "Scattershot Archer", "Conflux", "CON");
  }
}

module.exports = ScattershotArcher;
