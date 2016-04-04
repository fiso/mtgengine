"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AphettoDredgingBase = require("../setONS/AphettoDredging.js");

class AphettoDredging extends AphettoDredgingBase {
  constructor(game) {
    super(game, "Aphetto Dredging", "Premium Deck Series: Slivers", "H09");
  }
}

module.exports = AphettoDredging;
