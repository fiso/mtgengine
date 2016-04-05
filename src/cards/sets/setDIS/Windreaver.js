"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Windreaver extends UnimplementedCard {
  constructor(game) {
    super(game, "Windreaver", "Dissension", "DIS");
  }
}

module.exports = Windreaver;
