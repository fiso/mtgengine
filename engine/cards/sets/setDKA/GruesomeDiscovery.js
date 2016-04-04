"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GruesomeDiscovery extends UnimplementedCard {
  constructor(game) {
    super(game, "Gruesome Discovery", "Dark Ascension", "DKA");
  }
}

module.exports = GruesomeDiscovery;
