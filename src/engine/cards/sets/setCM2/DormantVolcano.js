"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DormantVolcano extends UnimplementedCard {
  constructor (game) {
    super(game, "Dormant Volcano", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = DormantVolcano;
