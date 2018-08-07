"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CuriousKillbot extends UnimplementedCard {
  constructor (game) {
    super(game, "Curious Killbot", "Unstable", "UST");
  }
}

module.exports = CuriousKillbot;
