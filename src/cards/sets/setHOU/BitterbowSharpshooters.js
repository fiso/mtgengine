"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BitterbowSharpshooters extends UnimplementedCard {
  constructor (game) {
    super(game, "Bitterbow Sharpshooters", "Hour of Devastation", "HOU");
  }
}

module.exports = BitterbowSharpshooters;
