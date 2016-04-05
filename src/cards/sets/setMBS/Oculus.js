"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Oculus extends UnimplementedCard {
  constructor(game) {
    super(game, "Oculus", "Mirrodin Besieged", "MBS");
  }
}

module.exports = Oculus;
