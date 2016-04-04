"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Mortarpod extends UnimplementedCard {
  constructor(game) {
    super(game, "Mortarpod", "Mirrodin Besieged", "MBS");
  }
}

module.exports = Mortarpod;
