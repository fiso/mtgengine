"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SurgeNode extends UnimplementedCard {
  constructor (game) {
    super(game, "Surge Node", "New Phyrexia", "NPH");
  }
}

module.exports = SurgeNode;
