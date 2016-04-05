"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EtherswornCanonist extends UnimplementedCard {
  constructor(game) {
    super(game, "Ethersworn Canonist", "Modern Masters", "MMA");
  }
}

module.exports = EtherswornCanonist;
