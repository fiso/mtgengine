"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JodahsAvenger extends UnimplementedCard {
  constructor (game) {
    super(game, "Jodah's Avenger", "Planar Chaos", "PLC");
  }
}

module.exports = JodahsAvenger;
