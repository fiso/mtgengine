"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VodalianSoldiers extends UnimplementedCard {
  constructor (game) {
    super(game, "Vodalian Soldiers", "Classic Sixth Edition", "6ED");
  }
}

module.exports = VodalianSoldiers;
