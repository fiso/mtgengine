"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DarklingStalker extends UnimplementedCard {
  constructor(game) {
    super(game, "Darkling Stalker", "Tempest", "TMP");
  }
}

module.exports = DarklingStalker;
