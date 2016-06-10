"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AvenTrooper extends UnimplementedCard {
  constructor (game) {
    super(game, "Aven Trooper", "Torment", "TOR");
  }
}

module.exports = AvenTrooper;
