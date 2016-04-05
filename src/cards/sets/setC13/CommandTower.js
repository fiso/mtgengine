"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CommandTower extends UnimplementedCard {
  constructor(game) {
    super(game, "Command Tower", "Commander 2013 Edition", "C13");
  }
}

module.exports = CommandTower;
