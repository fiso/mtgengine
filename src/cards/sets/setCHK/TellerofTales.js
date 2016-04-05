"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TellerofTales extends UnimplementedCard {
  constructor(game) {
    super(game, "Teller of Tales", "Champions of Kamigawa", "CHK");
  }
}

module.exports = TellerofTales;
