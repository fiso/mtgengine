"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BloodsoakedChampion extends Card {
  constructor(game) {
    super(game, "Bloodsoaked Champion", "Khans of Tarkir", "KTK");
  }
}

module.exports = BloodsoakedChampion;
