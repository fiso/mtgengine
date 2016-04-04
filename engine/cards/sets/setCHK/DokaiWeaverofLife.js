"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DokaiWeaverofLife extends Card {
  constructor(game) {
    super(game, "Dokai, Weaver of Life", "Champions of Kamigawa", "CHK");
  }
}

module.exports = DokaiWeaverofLife;
