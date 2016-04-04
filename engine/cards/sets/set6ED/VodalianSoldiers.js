"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VodalianSoldiers extends Card {
  constructor(game) {
    super(game, "Vodalian Soldiers", "Classic Sixth Edition", "6ED");
  }
}

module.exports = VodalianSoldiers;
