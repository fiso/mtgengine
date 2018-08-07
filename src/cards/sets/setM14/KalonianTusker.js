"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KalonianTusker extends UnimplementedCard {
  constructor (game) {
    super(game, "Kalonian Tusker", "Magic 2014", "M14");
  }
}

module.exports = KalonianTusker;
