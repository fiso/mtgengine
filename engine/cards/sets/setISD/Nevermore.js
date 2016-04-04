"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Nevermore extends Card {
  constructor(game) {
    super(game, "Nevermore", "Innistrad", "ISD");
  }
}

module.exports = Nevermore;
