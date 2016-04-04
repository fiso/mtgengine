"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Scapegoat extends Card {
  constructor(game) {
    super(game, "Scapegoat", "Stronghold", "STH");
  }
}

module.exports = Scapegoat;
