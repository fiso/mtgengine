"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class JeskaiStudent extends Card {
  constructor(game) {
    super(game, "Jeskai Student", "Khans of Tarkir", "KTK");
  }
}

module.exports = JeskaiStudent;
