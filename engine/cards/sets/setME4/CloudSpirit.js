"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CloudSpirit extends UnimplementedCard {
  constructor(game) {
    super(game, "Cloud Spirit", "Masters Edition IV", "ME4");
  }
}

module.exports = CloudSpirit;
