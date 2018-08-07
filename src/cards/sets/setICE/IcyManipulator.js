"use strict";
const Constants = require ("../../../Constants");
const IcyManipulatorBase = require("../setDOM/IcyManipulator");

class IcyManipulator extends IcyManipulatorBase {
  constructor (game) {
    super(game, "Icy Manipulator", "Ice Age", "ICE");
  }
}

module.exports = IcyManipulator;
