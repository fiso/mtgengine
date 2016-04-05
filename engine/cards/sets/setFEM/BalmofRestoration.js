"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BalmofRestoration extends UnimplementedCard {
  constructor(game) {
    super(game, "Balm of Restoration", "Fallen Empires", "FEM");
  }
}

module.exports = BalmofRestoration;
