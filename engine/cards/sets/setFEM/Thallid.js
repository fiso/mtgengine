"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Thallid extends Card {
  constructor(game) {
    super(game, "Thallid", "Fallen Empires", "FEM");
  }
}

module.exports = Thallid;
