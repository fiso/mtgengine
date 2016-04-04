"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EldraziConscription extends Card {
  constructor(game) {
    super(game, "Eldrazi Conscription", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = EldraziConscription;
