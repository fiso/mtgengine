"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DormantVolcano extends UnimplementedCard {
  constructor (game) {
    super(game, "Dormant Volcano", "Commander 2014", "C14");
  }
}

module.exports = DormantVolcano;
