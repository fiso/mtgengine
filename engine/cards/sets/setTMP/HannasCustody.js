"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HannasCustody extends Card {
  constructor(game) {
    super(game, "Hanna's Custody", "Tempest", "TMP");
  }
}

module.exports = HannasCustody;
