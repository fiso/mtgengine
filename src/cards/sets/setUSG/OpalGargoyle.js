"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OpalGargoyle extends UnimplementedCard {
  constructor (game) {
    super(game, "Opal Gargoyle", "Urza's Saga", "USG");
  }
}

module.exports = OpalGargoyle;
