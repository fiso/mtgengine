"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SlayingMantis extends UnimplementedCard {
  constructor (game) {
    super(game, "Slaying Mantis", "Unstable", "UST");
  }
}

module.exports = SlayingMantis;
