"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CharmedPendant extends UnimplementedCard {
  constructor(game) {
    super(game, "Charmed Pendant", "Odyssey", "ODY");
  }
}

module.exports = CharmedPendant;
