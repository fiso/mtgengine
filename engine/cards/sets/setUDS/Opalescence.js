"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Opalescence extends UnimplementedCard {
  constructor(game) {
    super(game, "Opalescence", "Urza's Destiny", "UDS");
  }
}

module.exports = Opalescence;
