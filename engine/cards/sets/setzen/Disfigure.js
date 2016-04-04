"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Disfigure extends Card {
  constructor(game) {
    super(game, "Disfigure", "Zendikar", "ZEN");
  }
}

module.exports = Disfigure;
