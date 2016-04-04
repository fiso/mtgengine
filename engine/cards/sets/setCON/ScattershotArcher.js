"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ScattershotArcher extends Card {
  constructor(game) {
    super(game, "Scattershot Archer", "Conflux", "CON");
  }
}

module.exports = ScattershotArcher;
