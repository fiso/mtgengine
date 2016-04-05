"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CracklingDoom extends UnimplementedCard {
  constructor(game) {
    super(game, "Crackling Doom", "Khans of Tarkir", "KTK");
  }
}

module.exports = CracklingDoom;
