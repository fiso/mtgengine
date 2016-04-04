"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LittleGirl extends Card {
  constructor(game) {
    super(game, "Little Girl", "Unhinged", "UNH");
  }
}

module.exports = LittleGirl;
