"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FirehoofCavalry extends UnimplementedCard {
  constructor (game) {
    super(game, "Firehoof Cavalry", "Khans of Tarkir", "KTK");
  }
}

module.exports = FirehoofCavalry;
