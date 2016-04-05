"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CruelTutor extends UnimplementedCard {
  constructor(game) {
    super(game, "Cruel Tutor", "Portal", "POR");
  }
}

module.exports = CruelTutor;
