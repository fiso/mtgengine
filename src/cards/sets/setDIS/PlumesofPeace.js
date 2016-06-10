"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PlumesofPeace extends UnimplementedCard {
  constructor (game) {
    super(game, "Plumes of Peace", "Dissension", "DIS");
  }
}

module.exports = PlumesofPeace;
