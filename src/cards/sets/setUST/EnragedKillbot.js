"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EnragedKillbot extends UnimplementedCard {
  constructor (game) {
    super(game, "Enraged Killbot", "Unstable", "UST");
  }
}

module.exports = EnragedKillbot;
