"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Equinox extends UnimplementedCard {
  constructor(game) {
    super(game, "Equinox", "Legends", "LEG");
  }
}

module.exports = Equinox;
