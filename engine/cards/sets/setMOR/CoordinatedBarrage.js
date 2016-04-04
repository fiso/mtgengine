"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CoordinatedBarrage extends Card {
  constructor(game) {
    super(game, "Coordinated Barrage", "Morningtide", "MOR");
  }
}

module.exports = CoordinatedBarrage;
