"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ProclamationofRebirth extends UnimplementedCard {
  constructor(game) {
    super(game, "Proclamation of Rebirth", "Dissension", "DIS");
  }
}

module.exports = ProclamationofRebirth;
