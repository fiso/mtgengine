"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Exhume extends UnimplementedCard {
  constructor(game) {
    super(game, "Exhume", "Battle Royale Box Set", "BRB");
  }
}

module.exports = Exhume;
