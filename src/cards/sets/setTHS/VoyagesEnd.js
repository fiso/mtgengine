"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VoyagesEnd extends UnimplementedCard {
  constructor (game) {
    super(game, "Voyage's End", "Theros", "THS");
  }
}

module.exports = VoyagesEnd;
