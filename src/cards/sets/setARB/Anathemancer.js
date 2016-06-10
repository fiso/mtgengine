"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Anathemancer extends UnimplementedCard {
  constructor (game) {
    super(game, "Anathemancer", "Alara Reborn", "ARB");
  }
}

module.exports = Anathemancer;
