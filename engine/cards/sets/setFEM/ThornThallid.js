"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ThornThallid extends Card {
  constructor(game) {
    super(game, "Thorn Thallid", "Fallen Empires", "FEM");
  }
}

module.exports = ThornThallid;
