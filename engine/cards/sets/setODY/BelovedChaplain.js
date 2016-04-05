"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BelovedChaplain extends UnimplementedCard {
  constructor(game) {
    super(game, "Beloved Chaplain", "Odyssey", "ODY");
  }
}

module.exports = BelovedChaplain;
