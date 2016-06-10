"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GideonsLawkeeper extends UnimplementedCard {
  constructor (game) {
    super(game, "Gideon's Lawkeeper", "Magic 2012", "M12");
  }
}

module.exports = GideonsLawkeeper;
