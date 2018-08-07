"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KraumLudevicsOpus extends UnimplementedCard {
  constructor (game) {
    super(game, "Kraum, Ludevic's Opus", "You Make the Cube", "PZ2");
  }
}

module.exports = KraumLudevicsOpus;
