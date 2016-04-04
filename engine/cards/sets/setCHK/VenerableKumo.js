"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VenerableKumo extends Card {
  constructor(game) {
    super(game, "Venerable Kumo", "Champions of Kamigawa", "CHK");
  }
}

module.exports = VenerableKumo;
