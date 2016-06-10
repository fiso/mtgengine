"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MindBomb extends UnimplementedCard {
  constructor (game) {
    super(game, "Mind Bomb", "Fifth Edition", "5ED");
  }
}

module.exports = MindBomb;
