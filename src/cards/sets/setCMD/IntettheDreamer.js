"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IntettheDreamer extends UnimplementedCard {
  constructor(game) {
    super(game, "Intet, the Dreamer", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = IntettheDreamer;
