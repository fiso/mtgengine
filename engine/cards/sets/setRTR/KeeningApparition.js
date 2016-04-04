"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KeeningApparition extends Card {
  constructor(game) {
    super(game, "Keening Apparition", "Return to Ravnica", "RTR");
  }
}

module.exports = KeeningApparition;
