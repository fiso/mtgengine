"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GrapeshotCatapult extends UnimplementedCard {
  constructor(game) {
    super(game, "Grapeshot Catapult", "Antiquities", "ATQ");
  }
}

module.exports = GrapeshotCatapult;
