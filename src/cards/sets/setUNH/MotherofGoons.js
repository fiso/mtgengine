"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MotherofGoons extends UnimplementedCard {
  constructor (game) {
    super(game, "Mother of Goons", "Unhinged", "UNH");
  }
}

module.exports = MotherofGoons;
