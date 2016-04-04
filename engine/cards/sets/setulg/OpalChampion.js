"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class OpalChampion extends Card {
  constructor(game) {
    super(game, "Opal Champion", "Urza's Legacy", "ULG");
  }
}

module.exports = OpalChampion;
