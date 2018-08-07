"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IdyllicTutor extends UnimplementedCard {
  constructor (game) {
    super(game, "Idyllic Tutor", "Morningtide", "MOR");
  }
}

module.exports = IdyllicTutor;
