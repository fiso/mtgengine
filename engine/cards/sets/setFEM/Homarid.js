"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Homarid extends Card {
  constructor(game) {
    super(game, "Homarid", "Fallen Empires", "FEM");
  }
}

module.exports = Homarid;
