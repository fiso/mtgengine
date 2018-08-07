"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BorisDevilboon extends UnimplementedCard {
  constructor (game) {
    super(game, "Boris Devilboon", "Masters Edition III", "ME3");
  }
}

module.exports = BorisDevilboon;
