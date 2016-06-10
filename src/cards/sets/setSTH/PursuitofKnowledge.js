"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PursuitofKnowledge extends UnimplementedCard {
  constructor (game) {
    super(game, "Pursuit of Knowledge", "Stronghold", "STH");
  }
}

module.exports = PursuitofKnowledge;
