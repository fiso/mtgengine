"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TrumpetBlast extends UnimplementedCard {
  constructor(game) {
    super(game, "Trumpet Blast", "Khans of Tarkir", "KTK");
  }
}

module.exports = TrumpetBlast;
