"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Extinction extends UnimplementedCard {
  constructor (game) {
    super(game, "Extinction", "Tempest", "TMP");
  }
}

module.exports = Extinction;
