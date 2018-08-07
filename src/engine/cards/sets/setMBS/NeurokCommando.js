"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NeurokCommando extends UnimplementedCard {
  constructor (game) {
    super(game, "Neurok Commando", "Mirrodin Besieged", "MBS");
  }
}

module.exports = NeurokCommando;
