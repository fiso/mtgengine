"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PrincessLucrezia extends UnimplementedCard {
  constructor (game) {
    super(game, "Princess Lucrezia", "Legends", "LEG");
  }
}

module.exports = PrincessLucrezia;
