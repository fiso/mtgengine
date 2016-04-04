"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PatronoftheMoon extends UnimplementedCard {
  constructor(game) {
    super(game, "Patron of the Moon", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = PatronoftheMoon;
