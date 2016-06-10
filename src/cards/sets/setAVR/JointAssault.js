"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JointAssault extends UnimplementedCard {
  constructor (game) {
    super(game, "Joint Assault", "Avacyn Restored", "AVR");
  }
}

module.exports = JointAssault;
