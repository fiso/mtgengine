"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FelidarUmbra extends UnimplementedCard {
  constructor(game) {
    super(game, "Felidar Umbra", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = FelidarUmbra;
