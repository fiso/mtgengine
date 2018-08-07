"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AustereCommand extends UnimplementedCard {
  constructor (game) {
    super(game, "Austere Command", "Iconic Masters", "IMA");
  }
}

module.exports = AustereCommand;
