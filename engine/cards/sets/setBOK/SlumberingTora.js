"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SlumberingTora extends UnimplementedCard {
  constructor(game) {
    super(game, "Slumbering Tora", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = SlumberingTora;
