"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ArlinnKord extends UnimplementedCard {
  constructor(game) {
    super(game, "Arlinn Kord", "Shadows over Innistrad", "SOI");
  }
}

module.exports = ArlinnKord;
