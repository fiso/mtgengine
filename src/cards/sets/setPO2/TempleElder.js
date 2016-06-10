"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TempleElder extends UnimplementedCard {
  constructor (game) {
    super(game, "Temple Elder", "Portal Second Age", "PO2");
  }
}

module.exports = TempleElder;
