"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Earthcraft extends UnimplementedCard {
  constructor (game) {
    super(game, "Earthcraft", "Tempest", "TMP");
  }
}

module.exports = Earthcraft;
