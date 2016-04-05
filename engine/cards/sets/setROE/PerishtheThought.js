"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PerishtheThought extends UnimplementedCard {
  constructor(game) {
    super(game, "Perish the Thought", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = PerishtheThought;
