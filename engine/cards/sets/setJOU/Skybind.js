"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Skybind extends Card {
  constructor(game) {
    super(game, "Skybind", "Journey into Nyx", "JOU");
  }
}

module.exports = Skybind;
