"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Waterwhirl extends Card {
  constructor(game) {
    super(game, "Waterwhirl", "Khans of Tarkir", "KTK");
  }
}

module.exports = Waterwhirl;
