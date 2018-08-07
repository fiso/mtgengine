"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ArchmageAscension extends UnimplementedCard {
  constructor (game) {
    super(game, "Archmage Ascension", "Zendikar", "ZEN");
  }
}

module.exports = ArchmageAscension;
