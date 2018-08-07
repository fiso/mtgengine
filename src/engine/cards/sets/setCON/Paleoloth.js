"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Paleoloth extends UnimplementedCard {
  constructor (game) {
    super(game, "Paleoloth", "Conflux", "CON");
  }
}

module.exports = Paleoloth;
