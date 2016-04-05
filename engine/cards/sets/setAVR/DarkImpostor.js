"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DarkImpostor extends UnimplementedCard {
  constructor(game) {
    super(game, "Dark Impostor", "Avacyn Restored", "AVR");
  }
}

module.exports = DarkImpostor;
