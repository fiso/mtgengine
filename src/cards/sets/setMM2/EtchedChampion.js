"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EtchedChampion extends UnimplementedCard {
  constructor (game) {
    super(game, "Etched Champion", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = EtchedChampion;
