"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NobleVestige extends UnimplementedCard {
  constructor (game) {
    super(game, "Noble Vestige", "Zendikar", "ZEN");
  }
}

module.exports = NobleVestige;
