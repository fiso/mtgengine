"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TemmetVizierofNaktamunToken extends UnimplementedCard {
  constructor (game) {
    super(game, "Temmet, Vizier of Naktamun Token", "Amonkhet Tokens", "TAKH");
  }
}

module.exports = TemmetVizierofNaktamunToken;
