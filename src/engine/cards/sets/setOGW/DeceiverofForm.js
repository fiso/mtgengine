"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DeceiverofForm extends UnimplementedCard {
  constructor (game) {
    super(game, "Deceiver of Form", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = DeceiverofForm;
