"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JeeringHomunculus extends UnimplementedCard {
  constructor (game) {
    super(game, "Jeering Homunculus", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = JeeringHomunculus;
