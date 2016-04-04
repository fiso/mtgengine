"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PhyrexianDigester extends UnimplementedCard {
  constructor(game) {
    super(game, "Phyrexian Digester", "Mirrodin Besieged", "MBS");
  }
}

module.exports = PhyrexianDigester;
