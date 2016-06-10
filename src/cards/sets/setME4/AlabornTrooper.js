"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AlabornTrooper extends UnimplementedCard {
  constructor (game) {
    super(game, "Alaborn Trooper", "Masters Edition IV", "ME4");
  }
}

module.exports = AlabornTrooper;
