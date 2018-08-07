"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Opportunist extends UnimplementedCard {
  constructor (game) {
    super(game, "Opportunist", "Tempest", "TMP");
  }
}

module.exports = Opportunist;
