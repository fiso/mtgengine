"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SmolderingTar extends UnimplementedCard {
  constructor (game) {
    super(game, "Smoldering Tar", "Invasion", "INV");
  }
}

module.exports = SmolderingTar;
