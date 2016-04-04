"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EtchedMonstrosity extends UnimplementedCard {
  constructor(game) {
    super(game, "Etched Monstrosity", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = EtchedMonstrosity;
