"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AngelheartVial extends UnimplementedCard {
  constructor(game) {
    super(game, "Angelheart Vial", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = AngelheartVial;
