"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SneakyHomunculus extends UnimplementedCard {
  constructor(game) {
    super(game, "Sneaky Homunculus", "Eighth Edition", "8ED");
  }
}

module.exports = SneakyHomunculus;
