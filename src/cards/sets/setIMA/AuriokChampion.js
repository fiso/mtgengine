"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AuriokChampion extends UnimplementedCard {
  constructor (game) {
    super(game, "Auriok Champion", "Iconic Masters", "IMA");
  }
}

module.exports = AuriokChampion;
