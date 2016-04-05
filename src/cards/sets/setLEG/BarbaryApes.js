"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BarbaryApes extends UnimplementedCard {
  constructor(game) {
    super(game, "Barbary Apes", "Legends", "LEG");
  }
}

module.exports = BarbaryApes;
