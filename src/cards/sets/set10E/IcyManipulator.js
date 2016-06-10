"use strict";
const Constants = require ("../../../Constants");
const IcyManipulatorBase = require("../setCED/IcyManipulator");

class IcyManipulator extends IcyManipulatorBase {
  constructor (game) {
    super(game, "Icy Manipulator", "Tenth Edition", "10E");
  }
}

module.exports = IcyManipulator;
