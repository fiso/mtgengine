"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WarriorAngel extends UnimplementedCard {
  constructor(game) {
    super(game, "Warrior Angel", "Stronghold", "STH");
  }
}

module.exports = WarriorAngel;
