"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PursuitofKnowledge extends Card {
  constructor(game) {
    super(game, "Pursuit of Knowledge", "Stronghold", "STH");
  }
}

module.exports = PursuitofKnowledge;
