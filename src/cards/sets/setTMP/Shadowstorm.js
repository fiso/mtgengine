"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Shadowstorm extends UnimplementedCard {
  constructor (game) {
    super(game, "Shadowstorm", "Tempest", "TMP");
  }
}

module.exports = Shadowstorm;
