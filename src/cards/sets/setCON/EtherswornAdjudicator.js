"use strict";
const Constants = require ("../../../Constants");
const EtherswornAdjudicatorBase = require("../setC16/EtherswornAdjudicator");

class EtherswornAdjudicator extends EtherswornAdjudicatorBase {
  constructor (game) {
    super(game, "Ethersworn Adjudicator", "Conflux", "CON");
  }
}

module.exports = EtherswornAdjudicator;
