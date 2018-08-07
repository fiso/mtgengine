"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VassalsDuty extends UnimplementedCard {
  constructor (game) {
    super(game, "Vassal's Duty", "Champions of Kamigawa", "CHK");
  }
}

module.exports = VassalsDuty;
