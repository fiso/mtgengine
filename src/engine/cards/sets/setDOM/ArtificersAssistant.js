"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ArtificersAssistant extends UnimplementedCard {
  constructor (game) {
    super(game, "Artificer's Assistant", "Dominaria", "DOM");
  }
}

module.exports = ArtificersAssistant;
