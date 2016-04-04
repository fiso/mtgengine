"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MatopiGolem extends Card {
  constructor(game) {
    super(game, "Matopi Golem", "Visions", "VIS");
  }
}

module.exports = MatopiGolem;
