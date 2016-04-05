"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ElvishPioneer extends UnimplementedCard {
  constructor(game) {
    super(game, "Elvish Pioneer", "Eighth Edition", "8ED");
  }
}

module.exports = ElvishPioneer;
