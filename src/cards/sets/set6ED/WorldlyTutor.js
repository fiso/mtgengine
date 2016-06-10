"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WorldlyTutor extends UnimplementedCard {
  constructor (game) {
    super(game, "Worldly Tutor", "Classic Sixth Edition", "6ED");
  }
}

module.exports = WorldlyTutor;
