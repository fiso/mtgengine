"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ArcticFoxes extends Card {
  constructor(game) {
    super(game, "Arctic Foxes", "Ice Age", "ICE");
  }
}

module.exports = ArcticFoxes;
