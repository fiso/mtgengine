"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SerraAvenger extends UnimplementedCard {
  constructor (game) {
    super(game, "Serra Avenger", "Champs and States", "pCMP");
  }
}

module.exports = SerraAvenger;
