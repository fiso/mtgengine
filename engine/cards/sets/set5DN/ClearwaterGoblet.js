"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ClearwaterGoblet extends UnimplementedCard {
  constructor(game) {
    super(game, "Clearwater Goblet", "Fifth Dawn", "5DN");
  }
}

module.exports = ClearwaterGoblet;
