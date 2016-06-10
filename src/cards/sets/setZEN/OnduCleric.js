"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OnduCleric extends UnimplementedCard {
  constructor (game) {
    super(game, "Ondu Cleric", "Zendikar", "ZEN");
  }
}

module.exports = OnduCleric;
