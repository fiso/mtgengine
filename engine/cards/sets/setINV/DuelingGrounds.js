"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DuelingGrounds extends Card {
  constructor(game) {
    super(game, "Dueling Grounds", "Invasion", "INV");
  }
}

module.exports = DuelingGrounds;
