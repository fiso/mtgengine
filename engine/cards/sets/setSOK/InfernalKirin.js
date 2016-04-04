"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class InfernalKirin extends Card {
  constructor(game) {
    super(game, "Infernal Kirin", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = InfernalKirin;
