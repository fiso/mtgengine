"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Astrolabe extends UnimplementedCard {
  constructor (game) {
    super(game, "Astrolabe", "Masters Edition III", "ME3");
  }
}

module.exports = Astrolabe;
