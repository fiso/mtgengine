"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VodalianMystic extends UnimplementedCard {
  constructor(game) {
    super(game, "Vodalian Mystic", "Apocalypse", "APC");
  }
}

module.exports = VodalianMystic;
