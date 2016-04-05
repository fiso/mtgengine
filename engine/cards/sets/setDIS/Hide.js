"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Hide extends UnimplementedCard {
  constructor(game) {
    super(game, "Hide", "Dissension", "DIS");
  }
}

module.exports = Hide;
