"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DreamHalls extends Card {
  constructor(game) {
    super(game, "Dream Halls", "Stronghold", "STH");
  }
}

module.exports = DreamHalls;
