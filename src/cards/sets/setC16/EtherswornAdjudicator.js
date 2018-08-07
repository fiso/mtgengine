"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EtherswornAdjudicator extends UnimplementedCard {
  constructor (game) {
    super(game, "Ethersworn Adjudicator", "Commander 2016", "C16");
  }
}

module.exports = EtherswornAdjudicator;
