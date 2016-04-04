"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ONaginata extends Card {
  constructor(game) {
    super(game, "O-Naginata", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = ONaginata;
