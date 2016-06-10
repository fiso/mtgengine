"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Headhunter extends UnimplementedCard {
  constructor (game) {
    super(game, "Headhunter", "Onslaught", "ONS");
  }
}

module.exports = Headhunter;
