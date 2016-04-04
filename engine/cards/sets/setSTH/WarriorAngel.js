"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WarriorAngel extends Card {
  constructor(game) {
    super(game, "Warrior Angel", "Stronghold", "STH");
  }
}

module.exports = WarriorAngel;
