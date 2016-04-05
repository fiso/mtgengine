"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Deathgrip extends UnimplementedCard {
  constructor(game) {
    super(game, "Deathgrip", "Collector's Edition", "CED");
  }
}

module.exports = Deathgrip;
