"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TendoIceBridge extends UnimplementedCard {
  constructor(game) {
    super(game, "Tendo Ice Bridge", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = TendoIceBridge;
