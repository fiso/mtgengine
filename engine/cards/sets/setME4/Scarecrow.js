"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Scarecrow extends Card {
  constructor(game) {
    super(game, "Scarecrow", "Masters Edition IV", "ME4");
  }
}

module.exports = Scarecrow;
