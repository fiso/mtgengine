"use strict";
const Constants = require ("../../../Constants");
const IcyManipulatorBase = require("../setDOM/IcyManipulator");

class IcyManipulator extends IcyManipulatorBase {
  constructor (game) {
    super(game, "Icy Manipulator", "Limited Edition Beta", "LEB");
  }
}

module.exports = IcyManipulator;
