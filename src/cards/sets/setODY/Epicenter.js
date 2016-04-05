"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Epicenter extends UnimplementedCard {
  constructor(game) {
    super(game, "Epicenter", "Odyssey", "ODY");
  }
}

module.exports = Epicenter;
