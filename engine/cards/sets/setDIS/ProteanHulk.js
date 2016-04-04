"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ProteanHulk extends UnimplementedCard {
  constructor(game) {
    super(game, "Protean Hulk", "Dissension", "DIS");
  }
}

module.exports = ProteanHulk;
