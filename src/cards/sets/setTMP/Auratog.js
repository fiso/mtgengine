"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Auratog extends UnimplementedCard {
  constructor (game) {
    super(game, "Auratog", "Tempest", "TMP");
  }
}

module.exports = Auratog;
