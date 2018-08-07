"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Dismantle extends UnimplementedCard {
  constructor (game) {
    super(game, "Dismantle", "Darksteel", "DST");
  }
}

module.exports = Dismantle;
