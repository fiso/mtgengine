"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DeputizedProtester extends UnimplementedCard {
  constructor (game) {
    super(game, "Deputized Protester", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = DeputizedProtester;
