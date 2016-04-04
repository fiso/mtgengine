"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SteppeLynx extends UnimplementedCard {
  constructor(game) {
    super(game, "Steppe Lynx", "Zendikar", "ZEN");
  }
}

module.exports = SteppeLynx;
