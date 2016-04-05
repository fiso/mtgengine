"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CosisTrickster extends UnimplementedCard {
  constructor(game) {
    super(game, "Cosi's Trickster", "Zendikar", "ZEN");
  }
}

module.exports = CosisTrickster;
