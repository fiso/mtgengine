"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VedalkenAnatomist extends UnimplementedCard {
  constructor (game) {
    super(game, "Vedalken Anatomist", "Mirrodin Besieged", "MBS");
  }
}

module.exports = VedalkenAnatomist;
