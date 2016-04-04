"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KusariGama extends Card {
  constructor(game) {
    super(game, "Kusari-Gama", "Champions of Kamigawa", "CHK");
  }
}

module.exports = KusariGama;
