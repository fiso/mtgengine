"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LaccolithWhelp extends UnimplementedCard {
  constructor (game) {
    super(game, "Laccolith Whelp", "Nemesis", "NEM");
  }
}

module.exports = LaccolithWhelp;
