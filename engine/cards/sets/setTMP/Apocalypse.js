"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Apocalypse extends UnimplementedCard {
  constructor(game) {
    super(game, "Apocalypse", "Tempest", "TMP");
  }
}

module.exports = Apocalypse;
