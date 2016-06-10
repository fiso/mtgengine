"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AngelicOverseer extends UnimplementedCard {
  constructor (game) {
    super(game, "Angelic Overseer", "Innistrad", "ISD");
  }
}

module.exports = AngelicOverseer;
