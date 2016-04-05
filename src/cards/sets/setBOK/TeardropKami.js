"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TeardropKami extends UnimplementedCard {
  constructor(game) {
    super(game, "Teardrop Kami", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = TeardropKami;
