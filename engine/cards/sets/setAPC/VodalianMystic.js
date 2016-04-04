"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VodalianMystic extends Card {
  constructor(game) {
    super(game, "Vodalian Mystic", "Apocalypse", "APC");
  }
}

module.exports = VodalianMystic;
