"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FilthyCur extends UnimplementedCard {
  constructor (game) {
    super(game, "Filthy Cur", "Odyssey", "ODY");
  }
}

module.exports = FilthyCur;
