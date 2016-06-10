"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TakeUpArms extends UnimplementedCard {
  constructor (game) {
    super(game, "Take Up Arms", "Khans of Tarkir", "KTK");
  }
}

module.exports = TakeUpArms;
