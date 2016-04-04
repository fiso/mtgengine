"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Astrolabe extends UnimplementedCard {
  constructor(game) {
    super(game, "Astrolabe", "Alliances", "ALL");
  }
}

module.exports = Astrolabe;
