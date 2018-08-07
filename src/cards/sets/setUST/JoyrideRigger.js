"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JoyrideRigger extends UnimplementedCard {
  constructor (game) {
    super(game, "Joyride Rigger", "Unstable", "UST");
  }
}

module.exports = JoyrideRigger;
