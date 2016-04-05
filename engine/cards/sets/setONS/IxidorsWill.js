"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IxidorsWill extends UnimplementedCard {
  constructor(game) {
    super(game, "Ixidor's Will", "Onslaught", "ONS");
  }
}

module.exports = IxidorsWill;
