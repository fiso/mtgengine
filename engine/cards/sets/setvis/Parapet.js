"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Parapet extends Card {
  constructor(game) {
    super(game, "Parapet", "Visions", "VIS");
  }
}

module.exports = Parapet;
