"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LittleGirl extends UnimplementedCard {
  constructor (game) {
    super(game, "Little Girl", "Unhinged", "UNH");
  }
}

module.exports = LittleGirl;
