"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Hammerhand extends UnimplementedCard {
  constructor (game) {
    super(game, "Hammerhand", "Magic 2015 Core Set", "M15");
  }
}

module.exports = Hammerhand;
