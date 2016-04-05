"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Painbringer extends UnimplementedCard {
  constructor(game) {
    super(game, "Painbringer", "Odyssey", "ODY");
  }
}

module.exports = Painbringer;
