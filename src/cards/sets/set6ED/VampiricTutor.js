"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VampiricTutor extends UnimplementedCard {
  constructor (game) {
    super(game, "Vampiric Tutor", "Classic Sixth Edition", "6ED");
  }
}

module.exports = VampiricTutor;
