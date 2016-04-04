"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TranquilExpanse extends UnimplementedCard {
  constructor(game) {
    super(game, "Tranquil Expanse", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = TranquilExpanse;
