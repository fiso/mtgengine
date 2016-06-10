"use strict";
const Constants = require ("../../../Constants");
const IcyManipulatorBase = require("../setCED/IcyManipulator");

class IcyManipulator extends IcyManipulatorBase {
  constructor (game) {
    super(game, "Icy Manipulator", "Duel Decks: Ajani vs. Nicol Bolas", "DDH");
  }
}

module.exports = IcyManipulator;
