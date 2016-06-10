"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ScavengingGhoul extends UnimplementedCard {
  constructor (game) {
    super(game, "Scavenging Ghoul", "Collector's Edition", "CED");
  }
}

module.exports = ScavengingGhoul;
