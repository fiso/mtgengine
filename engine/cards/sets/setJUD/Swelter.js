"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Swelter extends UnimplementedCard {
  constructor(game) {
    super(game, "Swelter", "Judgment", "JUD");
  }
}

module.exports = Swelter;
