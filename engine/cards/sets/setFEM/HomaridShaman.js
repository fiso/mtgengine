"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HomaridShaman extends Card {
  constructor(game) {
    super(game, "Homarid Shaman", "Fallen Empires", "FEM");
  }
}

module.exports = HomaridShaman;
