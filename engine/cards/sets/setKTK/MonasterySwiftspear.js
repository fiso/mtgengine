"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MonasterySwiftspear extends Card {
  constructor(game) {
    super(game, "Monastery Swiftspear", "Khans of Tarkir", "KTK");
  }
}

module.exports = MonasterySwiftspear;
