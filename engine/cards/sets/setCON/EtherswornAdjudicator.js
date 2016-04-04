"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EtherswornAdjudicator extends UnimplementedCard {
  constructor(game) {
    super(game, "Ethersworn Adjudicator", "Conflux", "CON");
  }
}

module.exports = EtherswornAdjudicator;
