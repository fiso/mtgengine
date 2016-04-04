"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AuriokChampion extends Card {
  constructor(game) {
    super(game, "Auriok Champion", "Fifth Dawn", "5DN");
  }
}

module.exports = AuriokChampion;
