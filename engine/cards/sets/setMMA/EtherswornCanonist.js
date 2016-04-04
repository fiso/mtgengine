"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EtherswornCanonist extends Card {
  constructor(game) {
    super(game, "Ethersworn Canonist", "Modern Masters", "MMA");
  }
}

module.exports = EtherswornCanonist;
