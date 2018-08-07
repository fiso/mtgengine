"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ArlinnKordEmblem extends UnimplementedCard {
  constructor (game) {
    super(game, "Arlinn Kord Emblem", "Shadows over Innistrad Tokens", "TSOI");
  }
}

module.exports = ArlinnKordEmblem;
