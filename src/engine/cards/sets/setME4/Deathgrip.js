"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Deathgrip extends UnimplementedCard {
  constructor (game) {
    super(game, "Deathgrip", "Masters Edition IV", "ME4");
  }
}

module.exports = Deathgrip;
