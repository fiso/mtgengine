"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CellarDoor extends UnimplementedCard {
  constructor (game) {
    super(game, "Cellar Door", "Innistrad", "ISD");
  }
}

module.exports = CellarDoor;
