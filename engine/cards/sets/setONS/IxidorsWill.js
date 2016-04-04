"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class IxidorsWill extends Card {
  constructor(game) {
    super(game, "Ixidor's Will", "Onslaught", "ONS");
  }
}

module.exports = IxidorsWill;
