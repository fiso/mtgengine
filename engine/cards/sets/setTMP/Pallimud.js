"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Pallimud extends UnimplementedCard {
  constructor(game) {
    super(game, "Pallimud", "Tempest", "TMP");
  }
}

module.exports = Pallimud;
