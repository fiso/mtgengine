"use strict";
const Constants = require ("../../../Constants");
const ProtectoroftheCrownBase = require("../setPZ2/ProtectoroftheCrown");

class ProtectoroftheCrown extends ProtectoroftheCrownBase {
  constructor (game) {
    super(game, "Protector of the Crown", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = ProtectoroftheCrown;
