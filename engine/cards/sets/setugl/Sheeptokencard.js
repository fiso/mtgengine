"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Sheeptokencard extends Card {
  constructor(game) {
    super(game, "Sheep token card", "Unglued", "UGL");
  }
}

module.exports = Sheeptokencard;
