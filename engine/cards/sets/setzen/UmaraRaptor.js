"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class UmaraRaptor extends Card {
  constructor(game) {
    super(game, "Umara Raptor", "Zendikar", "ZEN");
  }
}

module.exports = UmaraRaptor;
