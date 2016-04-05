"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NighteyestheDesecrator extends UnimplementedCard {
  constructor(game) {
    super(game, "Nighteyes the Desecrator", "Champions of Kamigawa", "CHK");
  }
}

module.exports = NighteyestheDesecrator;
