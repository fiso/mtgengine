"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PullfromTomorrow extends UnimplementedCard {
  constructor (game) {
    super(game, "Pull from Tomorrow", "Amonkhet", "AKH");
  }
}

module.exports = PullfromTomorrow;
