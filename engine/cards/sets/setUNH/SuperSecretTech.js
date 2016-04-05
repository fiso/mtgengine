"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SuperSecretTech extends UnimplementedCard {
  constructor(game) {
    super(game, "Super Secret Tech", "Unhinged", "UNH");
  }
}

module.exports = SuperSecretTech;
