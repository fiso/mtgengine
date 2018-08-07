"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Ghostform extends UnimplementedCard {
  constructor (game) {
    super(game, "Ghostform", "Core Set 2019", "M19");
  }
}

module.exports = Ghostform;
