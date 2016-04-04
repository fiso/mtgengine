"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Bandage extends Card {
  constructor(game) {
    super(game, "Bandage", "Stronghold", "STH");
  }
}

module.exports = Bandage;
