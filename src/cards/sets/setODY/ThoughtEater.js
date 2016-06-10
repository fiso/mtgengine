"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThoughtEater extends UnimplementedCard {
  constructor (game) {
    super(game, "Thought Eater", "Odyssey", "ODY");
  }
}

module.exports = ThoughtEater;
