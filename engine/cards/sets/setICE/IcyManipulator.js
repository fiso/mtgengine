"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const IcyManipulatorBase = require("../setCED/IcyManipulator.js");

class IcyManipulator extends IcyManipulatorBase {
  constructor(game) {
    super(game, "Icy Manipulator", "Ice Age", "ICE");
  }
}

module.exports = IcyManipulator;
