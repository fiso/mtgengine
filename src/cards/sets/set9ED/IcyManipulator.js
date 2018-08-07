"use strict";
const Constants = require ("../../../Constants");
const IcyManipulatorBase = require("../setDOM/IcyManipulator");

class IcyManipulator extends IcyManipulatorBase {
  constructor (game) {
    super(game, "Icy Manipulator", "Ninth Edition", "9ED");
  }
}

module.exports = IcyManipulator;
