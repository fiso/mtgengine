"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PhyrexianRebirth extends UnimplementedCard {
  constructor (game) {
    super(game, "Phyrexian Rebirth", "Mirrodin Besieged", "MBS");
  }
}

module.exports = PhyrexianRebirth;
