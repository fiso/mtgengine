"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CravenGiant extends UnimplementedCard {
  constructor (game) {
    super(game, "Craven Giant", "Tempest Remastered", "TPR");
  }
}

module.exports = CravenGiant;
