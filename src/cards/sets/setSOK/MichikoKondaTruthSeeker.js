"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MichikoKondaTruthSeeker extends UnimplementedCard {
  constructor (game) {
    super(game, "Michiko Konda, Truth Seeker", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = MichikoKondaTruthSeeker;
