"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const IcyManipulatorBase = require("../setCED/IcyManipulator.js");

class IcyManipulator extends IcyManipulatorBase {
  constructor(game) {
    super(game, "Icy Manipulator", "Ninth Edition", "9ED");
  }
}

module.exports = IcyManipulator;
