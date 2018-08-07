"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Tsunami extends UnimplementedCard {
  constructor (game) {
    super(game, "Tsunami", "Masters Edition IV", "ME4");
  }
}

module.exports = Tsunami;
