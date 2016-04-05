"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AuriokChampion extends UnimplementedCard {
  constructor(game) {
    super(game, "Auriok Champion", "Fifth Dawn", "5DN");
  }
}

module.exports = AuriokChampion;
