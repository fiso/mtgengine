"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Repercussion extends UnimplementedCard {
  constructor(game) {
    super(game, "Repercussion", "Urza's Destiny", "UDS");
  }
}

module.exports = Repercussion;
