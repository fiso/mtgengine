"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FelidarUmbra extends UnimplementedCard {
  constructor (game) {
    super(game, "Felidar Umbra", "Planechase Anthology", "PCA");
  }
}

module.exports = FelidarUmbra;
