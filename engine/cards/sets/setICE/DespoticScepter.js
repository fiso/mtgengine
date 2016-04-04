"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DespoticScepter extends Card {
  constructor(game) {
    super(game, "Despotic Scepter", "Ice Age", "ICE");
  }
}

module.exports = DespoticScepter;
