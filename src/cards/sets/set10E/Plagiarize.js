"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Plagiarize extends UnimplementedCard {
  constructor (game) {
    super(game, "Plagiarize", "Tenth Edition", "10E");
  }
}

module.exports = Plagiarize;
