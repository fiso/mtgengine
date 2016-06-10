"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WildOx extends UnimplementedCard {
  constructor (game) {
    super(game, "Wild Ox", "Masters Edition IV", "ME4");
  }
}

module.exports = WildOx;
