"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Telekinesis extends UnimplementedCard {
  constructor(game) {
    super(game, "Telekinesis", "Legends", "LEG");
  }
}

module.exports = Telekinesis;
