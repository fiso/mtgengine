"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RhysticTutor extends UnimplementedCard {
  constructor (game) {
    super(game, "Rhystic Tutor", "Prophecy", "PCY");
  }
}

module.exports = RhysticTutor;
