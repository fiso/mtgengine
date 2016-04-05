"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MoxJet extends UnimplementedCard {
  constructor(game) {
    super(game, "Mox Jet", "Collector's Edition", "CED");
  }
}

module.exports = MoxJet;
