"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TeferisRealm extends Card {
  constructor(game) {
    super(game, "Teferi's Realm", "Visions", "VIS");
  }
}

module.exports = TeferisRealm;
