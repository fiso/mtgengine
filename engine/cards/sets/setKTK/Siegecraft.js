"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Siegecraft extends Card {
  constructor(game) {
    super(game, "Siegecraft", "Khans of Tarkir", "KTK");
  }
}

module.exports = Siegecraft;
