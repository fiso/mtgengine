"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CerebralVortex extends UnimplementedCard {
  constructor(game) {
    super(game, "Cerebral Vortex", "Guildpact", "GPT");
  }
}

module.exports = CerebralVortex;
