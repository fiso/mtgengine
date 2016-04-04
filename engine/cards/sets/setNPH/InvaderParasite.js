"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class InvaderParasite extends UnimplementedCard {
  constructor(game) {
    super(game, "Invader Parasite", "New Phyrexia", "NPH");
  }
}

module.exports = InvaderParasite;
