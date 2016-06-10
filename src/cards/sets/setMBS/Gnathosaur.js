"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Gnathosaur extends UnimplementedCard {
  constructor (game) {
    super(game, "Gnathosaur", "Mirrodin Besieged", "MBS");
  }
}

module.exports = Gnathosaur;
