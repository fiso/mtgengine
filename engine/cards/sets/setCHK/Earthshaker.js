"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Earthshaker extends Card {
  constructor(game) {
    super(game, "Earthshaker", "Champions of Kamigawa", "CHK");
  }
}

module.exports = Earthshaker;
