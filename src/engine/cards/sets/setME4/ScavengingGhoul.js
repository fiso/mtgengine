"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ScavengingGhoul extends UnimplementedCard {
  constructor (game) {
    super(game, "Scavenging Ghoul", "Masters Edition IV", "ME4");
  }
}

module.exports = ScavengingGhoul;
