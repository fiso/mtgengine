"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChromeMox extends UnimplementedCard {
  constructor (game) {
    super(game, "Chrome Mox", "Eternal Masters", "EMA");
  }
}

module.exports = ChromeMox;
