"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThiefofBlood extends UnimplementedCard {
  constructor (game) {
    super(game, "Thief of Blood", "Commander Anthology", "CMA");
  }
}

module.exports = ThiefofBlood;
