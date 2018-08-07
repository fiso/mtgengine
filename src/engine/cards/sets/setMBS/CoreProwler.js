"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CoreProwler extends UnimplementedCard {
  constructor (game) {
    super(game, "Core Prowler", "Mirrodin Besieged", "MBS");
  }
}

module.exports = CoreProwler;
