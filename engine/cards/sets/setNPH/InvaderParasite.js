"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class InvaderParasite extends Card {
  constructor(game) {
    super(game, "Invader Parasite", "New Phyrexia", "NPH");
  }
}

module.exports = InvaderParasite;
