"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThoughtNibbler extends UnimplementedCard {
  constructor (game) {
    super(game, "Thought Nibbler", "Odyssey", "ODY");
  }
}

module.exports = ThoughtNibbler;
